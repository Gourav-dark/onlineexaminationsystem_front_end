import { Link } from "react-router-dom";
import "../../Assets/Styles/ProfileHeader.css"
import {BiMenu,BiLogOut,BiCog} from "react-icons/bi";

//image
import defaultimg from "../../Pages/User/ProfileImages/user.png";
const ProfileHeader = () => {
  return (
    <div className="container-fluid g-0 profile-Header">
      {/* Top Nav Bar */}
      <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark px-2 d-flex justify-content-between" data-bs-theme="dark">
        <div className="side-nav-button p-1 me-3 text-light">
          <BiMenu/>
        </div>
        {/* online Examination System logo */}
        <Link to="/profile" className="navbar-brand px-4 fs-6 initialism">Online Examination System</Link>
        {/* Top Nav Bar button */}
        <div className="profile-logo dropstart me-4">
          <button className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
            <img src={defaultimg} className="rounded-circle p-1 bg-light me-2" alt="" style={{height:"1.3rem"}} />
            UserName
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link to="" className="dropdown-item d-flex align-items-center gap-2"><BiCog/>Setting</Link></li>
            <li><Link to="" className="dropdown-item d-flex align-items-center gap-2"><BiLogOut/>Log Out</Link></li>
          </ul>
        </div>
      </nav>
      <main>
        {/* Side Nav Bar */}
      </main>
    </div>
  );
}
export default ProfileHeader

