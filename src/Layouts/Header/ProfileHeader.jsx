import { NavLink,Link, Outlet,useNavigate } from "react-router-dom";
import "../../Assets/Styles/ProfileHeader.css"
import { useState,useContext } from "react";
import { AuthContext } from '../../Config/AuthProvider';
//All Icon
import { BiMenu, BiLogOut, BiCog, BiMenuAltLeft,BiBookOpen,BiUserCircle } from "react-icons/bi";
import { AiFillBank,AiOutlineFund,AiOutlineUsergroupAdd } from "react-icons/ai";
//image
// import image from "../../Pages/User/profileImages/user.png";

import { useEffect } from "react";
const ProfileHeader = () => {
  const Navigate = useNavigate();
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthenticated) {
      Navigate("/login");
    }
  });
  var [Ismenu, setIsmenu] = useState(true);
  const [classforside, setclassforside] = useState("");

  //Filter Navbar list base on The User Type
  const profile_nav_list = [
    {
      id: 1,
      Name: "Profile",
      icon: <BiUserCircle />,
      url: "/profile"
    },
    {
      id: 2,
      Name: "Setting",
      icon: <BiCog />,
      url: `setting/${user.UserId}`
    },
    {
      id: 3,
      Name: "Institutes",
      icon: <AiFillBank />,
      url: `institute/${user.Iid}`
    },
    {
      id: 4,
      Name: "User List",
      icon: <AiOutlineUsergroupAdd />,
      url: `userlist/${user.UserId}`
    },
    {
      id: 5,
      Name: "Courses",
      icon: <BiBookOpen />,
      url: `course/${user.Iid}`
    },
    {
      id: 6,
      Name: "Enroll Course",
      icon: <BiBookOpen />,
      url: `enrollcourse/${user.UserId}/${user.Iid}`
    },
    {
      id: 7,
      Name: "Results",
      icon: <AiOutlineFund />,
      url: `result/${user.UserId}`
    }
    // {
    //   id:6,
    //   Name:"Exams",
    //   icon: <BiPencil/>,
    //   url:"examlist"
    // },
    // {
    //   id:7,
    //   Name:"Question",
    //   icon: <AiFillQuestionCircle/>,
    //   url:"question"
    // },
  ];
  let ShowList = [];
  if (user.Role === "Admin") {
    ShowList=[1, 2, 3, 4, 5, 7];
  } else if (user.Role === "InstituteUser") {
    ShowList=[1, 2, 3, 5, 7];
  } else if (user.Role === "Examiner") {
    ShowList=[1, 2, 5, 7];
  } else if (user.Role === "Student") {
    ShowList=[1, 2, 6, 7];
  }
  const listItems = profile_nav_list.filter(item=>ShowList.includes(item.id)).map((items) =>
  {
    return (<li key={items.id} className="nav-list-item mx-1 ps-0 py-1 d-flex align-items-center">
      <NavLink to={items.url}>{items.icon}
        {Ismenu && <span className="ms-1">{items.Name}</span>}
      </NavLink>
    </li>);
    }
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
        <Link to="/profile" className="navbar-brand ms-2 fs-6 initialism">Online Examination System</Link>
        {/* Top Nav Bar button */}
        <div className="profile-logo d-flex gap-2">
          <button className="btn btn-outline-light" onClick={()=>Navigate("/profile")}>
            {/* <img src={require(`../../Pages/User${user.Image}`)} className="border rounded-circle p-1 me-2" alt="" style={{height:"1.3rem"}} /> */}
            {user.Email}
          </button>
          <h6 className="mx-2 text-light mt-2">{user.Role}</h6>
        </div>
      </nav>
      <main className="row p-0 m-0">
        {/* Side Nav Bar */}
        <nav className={`Side-navbar h-75 col-3 col-lg-2 col-md-2 col-sm-3 p-1 rounded-end ${classforside}`}>
          <ul className="nav-list text-white mt-3 ps-0">
            {listItems}
            <li className="nav-list-item ps-0 d-flex align-items-center mt-5">
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