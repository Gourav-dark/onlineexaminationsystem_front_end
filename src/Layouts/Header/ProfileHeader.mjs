import { NavLink, Outlet } from "react-router-dom";
export default function ProfileHeader() {
  return (
    <div>
      <h1>Profile Header</h1>
      <nav>
        <ul>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="setting">Setting</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}
