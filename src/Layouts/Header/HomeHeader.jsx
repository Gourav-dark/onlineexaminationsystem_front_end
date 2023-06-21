import { Link, NavLink, Outlet } from "react-router-dom";
import { BiLogIn} from "react-icons/bi";
///css HomeHeader css
import "../../Assets/Styles/HomeHeader.css";
const HomeHeader = () => {
  return (
    <>
    <nav className="navbar sticky-top bg-dark navbar-expand-md" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-6 initialism">Online Examination System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav Home-nav-list">
              <NavLink className="nav-link mx-1" to="/">Home</NavLink>
              <NavLink className="nav-link mx-1" to="/service">Services</NavLink>
              <NavLink className="nav-link mx-1" to="/about">About</NavLink>
              <NavLink className="nav-link mx-1" to="/contact">Contact</NavLink>
              <span className="mx-3"></span>
              <Link className="btn btn-sm btn-outline-light mx-1" to="/signup">Sign Up</Link>
              <Link className="btn btn-sm btn-outline-light mx-1" to="/login">Login<span><BiLogIn/></span></Link>
            </div>
          </div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default HomeHeader
