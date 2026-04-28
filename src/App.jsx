import Header from "./components/Header"
import FeedbackItem from "./components/feedbackitem"
import FeedbackList from "./components/FeedbackList"
import { useState } from 'react'
import FeedbackLength from "./components/FeedbackLength"
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider } from "./components/context/FeedbackContext"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./components/About"



const App = () => {

  return (
    <BrowserRouter>
      <FeedbackProvider>
        <Header text="Review-App" bgColor="blue" textColor="white" />
        <div className="container">
          <Routes>
            <Route path="/" element={

              <>
                <FeedbackForm />

                <FeedbackLength />

                <FeedbackList />
              </>

            } />

            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </div>
      </FeedbackProvider>
    </BrowserRouter>
  )
}

export default App