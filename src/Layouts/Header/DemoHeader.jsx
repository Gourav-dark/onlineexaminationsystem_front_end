import { Link, NavLink, Outlet } from "react-router-dom";
import ButtonNavigate from "../../Components/ButtonNavigate.mjs";
// import "../../Assets/Styles/HomeHeader.css";

export default function DemoHeader() {
  return (
    <>
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav_logo">Online Examination System</Link>

        <ul className="nav_items">
          <li className="nav_item">
            <NavLink to="/" className="nav_link">Home</NavLink>
            <NavLink to="/service" className="nav_link">Product</NavLink>
            <NavLink to="/about" className="nav_link">Services</NavLink>
            <NavLink to="/contact" className="nav_link">Contact</NavLink>
          </li>
        </ul>
        <nav>
          <button className="button" id="form-open-Login">Login</button>
          <button className="button" id="form-open-SignUp">SignUp</button>
          <ButtonNavigate classname="button" pageLink="/profile" btnName="Profile" />
          <ButtonNavigate classname="button" pageLink="/profile" btnName="Profile" />
        </nav>
      </nav>
      
    </header>
    <Outlet/>
    </>
  );
}
