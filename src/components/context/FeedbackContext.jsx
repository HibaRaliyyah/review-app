import { createContext,useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';



const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is sample context 1",
          },
          {
            id: 2,
            text: "This is sample context 2",
          },
          {
            id: 3,
            text: "This is sample context 3",
          }
          
    ]);

    useEffect(() => {
      fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setFeedback(data);
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    });


    const addFeedback = async (newFeedback) => {
      newFeedback.id = uuidv4();
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });
  
      const data = await response.json();
      setFeedback([data, ...feedback]); // update state with response from server
    };
  

// Set item to be updated
const editFeedback = (item) => {
  setFeedbackEdit({
    item,
    edit: true,
  });
};

// Update feedback (PUT)
const updateFeedback = async (id, updItem) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updItem),
  });

  const data = await response.json();

  setFeedback(
    feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
  );

  // reset edit mode
  setFeedbackEdit({ item: {}, edit: false });
};



const deleteFeedback = async (id) => {
  if (window.confirm("Are you sure?")) {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
    setFeedback(feedback.filter((item) => item.id !== id));
  }
};

      

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}



export default FeedbackContext;