import { Link } from "react-router-dom";

const Header = ({text, bgColor, textColor}) => {

  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
   };

  return (
   <header style={headerStyle}>
    <div className="container">
    <div>
    <Link to="/">
    <h2>{text}</h2>
    </Link>
    <Link to="/about">About Us</Link>
    </div>
    </div>
   </header>
  )
}

export default Header


