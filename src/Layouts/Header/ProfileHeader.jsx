import { NavLink, Outlet,Link } from "react-router-dom";
import "../../Assets/Styles/Profile.css";

export default function ProfileHeader() {
  return (
    <div className="container">
        <nav>
        <ul>
            <li><a href="#" class="logo">
            <img src="/logo.jpg" alt=""/>
            <span class="nav-item">DashBoard</span>
            </a></li>
            <li><a href="#">
            <i class="fas fa-home"></i>
            <span class="nav-item">Home</span>
            </a></li>
            <li><a href="">
            <i class="fas fa-user"></i>
            <span class="nav-item">Profile</span>
            </a></li>
            <li><a href="">
            <i class="fas fa-wallet"></i>
            <span class="nav-item">Wallet</span>
            </a></li>
            <li><a href="">
            <i class="fas fa-chart-bar"></i>
            <span class="nav-item">Analytics</span>
            </a></li>
            <li><a href="">
            <i class="fas fa-tasks"></i>
            <span class="nav-item">Tasks</span>
            </a></li>
            <li><a href="">
            <i class="fas fa-cog"></i>
            <span class="nav-item">Settings</span>
            </a></li>
            <li><a href="">
            <i class="fas fa-question-circle"></i>
            <span class="nav-item">Help</span>
            </a></li>
            <li><a href="" class="logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="nav-item">Log out</span>
            </a></li>
            </ul>
        </nav>
        <section className="main">
            <Outlet/>
        </section>
    </div>
  );
}
