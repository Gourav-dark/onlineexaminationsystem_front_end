import { NavLink,Link, Outlet } from "react-router-dom";
import "../../Assets/Styles/ProfileHeader.css"
import {BiMenu,BiLogOut,BiCog,BiUser} from "react-icons/bi";

//image
import defaultimg from "../../Pages/User/profileImages/user.png";
import { useState } from "react";
const ProfileHeader = () => {
  var [Ismenu,setIsmenu]=useState(true);
  const [classforside,setclassforside]=useState("");
  const profil_nav_list=[
    {
      number:1,
      Name:"Home",
      icon: <BiUser/>,
      url:"/profile"
    },
    {
      number:2,
      Name:"Home",
      icon: <BiUser/>,
      url:"/profile"
    },
    {
      number:3,
      Name:"Home",
      icon: <BiUser/>,
      url:"/profile"
    }
  ];
  const listItems=profil_nav_list.map((items)=>
  <li key={items.number} className="nav-list-item mx-1 ps-0 py-2 d-flex align-items-center">
      <NavLink to={items.url}>{items.icon}
      {Ismenu &&<span className="ms-1">{items.Name}</span>}
      </NavLink>
  </li>
  );
  const SideNavclick=()=>{
    var isactive=!Ismenu;
    setIsmenu(!Ismenu);
    if(isactive){
      setclassforside("");
    }else{
      setclassforside("navSizeline");
    }
  }
  return (
    <div className="container-fluid p-0 m-0 profile-Header">
      {/* Top Nav Bar */}
      <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark px-2 d-flex justify-content-between w-100" data-bs-theme="dark">
        <div className="side-nav-button p-1 me-3 text-light" onClick={SideNavclick}>
          <BiMenu/>
        </div>
        {/* online Examination System logo */}
        <Link to="/profile" className="navbar-brand px-4 fs-6 initialism">Online Examination System</Link>
        {/* Top Nav Bar button */}
        <div className="profile-logo dropstart me-4">
          <button className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
            <img src={defaultimg} className="border rounded-circle p-1 me-2" alt="" style={{height:"1.3rem"}} />
            UserName
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link to="" className="dropdown-item d-flex align-items-center gap-2"><BiCog/>Setting</Link></li>
            <li><Link to="" className="dropdown-item d-flex align-items-center gap-2"><BiLogOut/>Log Out</Link></li>
          </ul>
        </div>
      </nav>
      <main className="row p-0 m-0">
        {/* Side Nav Bar */}
        <nav className={`Side-navbar col-3 col-lg-2 col-md-2 col-sm-3 p-1 ${classforside}`}>
          <ul className="nav-list text-white mt-3 ps-0">
            {listItems}
          </ul>
        </nav>
        <div className="diplay-area col">
          <Outlet/>
        </div>
      </main>
    </div>
  );
}
export default ProfileHeader;