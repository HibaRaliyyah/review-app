import { useContext } from "react"
import FeedbackContext from "./context/FeedbackContext"



const FeedbackLength = () => {

  const {feedback} = useContext(FeedbackContext)
  return (
    <div className="container">
        <h4 className="length">Length: ({feedback.length})</h4>
    </div>
  )
}

export default FeedbackLength