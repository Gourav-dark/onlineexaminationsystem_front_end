import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
//Home Import all
import HomeHeader from './Layouts/Header/HomeHeader';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import NotFound from './Pages/NotFound';
// login and Regis
import Login from './Pages/User/Login';
import SignUp from './Pages/User/SignUp';
import NormalUser from './Pages/Registration/NormalUser';
// import Examiner from './Pages/Registration/Examiner';
import InstituteUser from './Pages/Registration/InstituteUser';
//profile
import ProfileHeader from './Layouts/Header/ProfileHeader';
import Profile from './Pages/User/Profile';
import Setting from './Pages/User/Setting';

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeHeader />}>
            <Route index element={ <Home/>}/>
            <Route path='service' element={<Service/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='signup' element={<SignUp/>}>
              <Route path='normaluser' element={<NormalUser/>}/>
              {/* <Route path='student' element={<Student/>}/> */}
              {/* <Route path='examiner' element={<Examiner/>}/> */}
              <Route path='instituteuser' element={<InstituteUser/>}/>
            </Route>
            <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='/profile' element={<ProfileHeader />}>
            <Route index element={<Profile />} />
            <Route path='setting' element={ <Setting/>}/>
          </Route>
          
          {/* Page Not Found */}
          <Route path='*' element={ <NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
