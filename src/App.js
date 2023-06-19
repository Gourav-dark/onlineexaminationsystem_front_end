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
// User all import
import ProfileHeader from './Layouts/Header/ProfileHeader';
import Profile from './Pages/User/Profile';
import Setting from './Pages/User/Setting';

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
