import { NavLink, Outlet } from "react-router-dom";
export default function HomeHeader() {
  return (
    <div>
      <h1>HomeHeader</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}
