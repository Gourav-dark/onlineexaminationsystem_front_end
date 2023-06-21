import { NavLink, Outlet } from "react-router-dom";
import "../../Assets/Styles/SignUp.css";
const SignUp = () => {
  return (
    <>
      <div className="SignUp">
        <div className="btn-group btn-group-lg SignUp-btn-group mt-1" role="group" aria-label="Basic example">
          <NavLink to="student" type="button" className="btn btn-outline-light px-2 px-md-5 px-sm-4">Student</NavLink>
          <NavLink to="examiner" type="button" className="btn btn-outline-light px-2 px-md-5 px-sm-4">Examiner</NavLink>
          <NavLink to="instituteuser" type="button" className="btn btn-outline-light px-2 px-md-4 px-sm-3">Institute User</NavLink>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default SignUp;
