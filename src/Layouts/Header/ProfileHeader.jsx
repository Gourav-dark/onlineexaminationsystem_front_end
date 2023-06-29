import { NavLink,Link, Outlet,useNavigate } from "react-router-dom";
import "../../Assets/Styles/ProfileHeader.css"
import { useState,useContext } from "react";
import { AuthContext } from '../../Config/AuthProvider';
//All Icon
import { BiMenu, BiLogOut, BiCog, BiUser, BiMenuAltLeft,BiBookOpen } from "react-icons/bi";
import { AiFillBank,AiOutlineLaptop } from "react-icons/ai";
//image
// import image from "../../Pages/User/profileImages/user.png";

import { useEffect } from "react";
const ProfileHeader = () => {
  const Navigate = useNavigate();
  const { isAuthenticated,user,logout } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthenticated) {
      Navigate("/login");
    }
  });
  var [Ismenu,setIsmenu]=useState(true);
  const [classforside,setclassforside]=useState("");
  const profil_nav_list=[
    {
      id:1,
      Name:"Profile",
      icon: <BiUser/>,
      url:"/profile"
    },
    {
      id:2,
      Name:"Setting",
      icon: <BiCog/>,
      url:"setting"
    },
    {
      id:3,
      Name:"Institute",
      icon: <AiFillBank/>,
      url:"/profile"
    },
    {
      id:4,
      Name:"Courses",
      icon: <AiOutlineLaptop/>,
      url:"/profile"
    },
    {
      id:5,
      Name:"Subjects",
      icon: <BiBookOpen/>,
      url:"/profile"
    },
    {
      id:6,
      Name:"Results",
      icon: <AiFillBank/>,
      url:"/profile"
    },
    {
      id:7,
      Name:"Question",
      icon: <AiFillBank/>,
      url:"/profile"
    }
  ];
  const listItems=profil_nav_list.map((items)=>
  <li key={items.id} className="nav-list-item mx-1 ps-0 py-1 d-flex align-items-center">
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
          
          {Ismenu?<BiMenu/>:<BiMenuAltLeft/>}
        </div>
        {/* online Examination System logo */}
        <Link to="/profile" className="navbar-brand px-4 fs-6 initialism">Online Examination System</Link>
        {/* Top Nav Bar button */}
        {/* <div className="profile-logo dropstart me-4">
          <button className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
            <img src={defaultimg} className="border rounded-circle p-1 me-2" alt="" style={{height:"1.3rem"}} />
            UserName
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link to="" className="dropdown-item d-flex align-items-center gap-2"><BiCog/>Setting</Link></li>
            <li><Link to="" className="dropdown-item d-flex align-items-center gap-2"><BiLogOut/>Log Out</Link></li>
          </ul>
        </div> */}
        <div className="profile-logo me-4">
          <button className="btn btn-outline-light" onClick={()=>Navigate("/profile")}>
            {/* <img src={require(`../../Pages/User${user.Image}`)} className="border rounded-circle p-1 me-2" alt="" style={{height:"1.3rem"}} /> */}
            {user.Email}
          </button>
        </div>
      </nav>
      <main className="row p-0 m-0">
        {/* Side Nav Bar */}
        <nav className={`Side-navbar col-3 col-lg-2 col-md-2 col-sm-3 p-1 vh-100 ${classforside}`}>
          <ul className="nav-list text-white mt-3 ps-0">
            {listItems}
            <li className="nav-list-item ps-0 d-flex align-items-center mt-4">
              <button className="btn btn-outline-light w-100 ps-2" onClick={logout}>
                <BiLogOut />
                {Ismenu && <span className="m-0 p-0">Log Out</span>}
              </button>
            </li>
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