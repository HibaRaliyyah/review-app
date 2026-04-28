import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="about">
        <h1>This is about page</h1>
        <p>This package simply re-exports everything from react-router to smooth the upgrade path for v6 applications. Once upgraded you can change all of your imports and remove it from your dependencies.</p>
        <Link to="/" className="btn btn-primary">Go home</Link>
    </div>
  )
}

export default About