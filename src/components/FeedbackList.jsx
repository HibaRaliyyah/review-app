import React, { useContext } from 'react'
import FeedbackItem from './feedbackitem'
import FeedbackContext from './context/FeedbackContext'

const FeedbackList = ({handleDelete}) => {

  const {feedback} = useContext(FeedbackContext)


    if(feedback.length === 0){
        return <p>No feedback yet</p>
    }


  return (


    
    <div className="feedback-list">
    {
        feedback.map((item) => (
            <FeedbackItem key={item.id} item={item}/>
        ))
    }

    </div>
  )
}

export default FeedbackList