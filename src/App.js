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

//profile
import ProfileHeader from './Layouts/Header/ProfileHeader';
import Profile from './Pages/User/Profile';
import Setting from './Pages/User/Setting';

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import './App.css';

/// this only for testing purposes
import Register from './Pages/User/Register';
import { AuthProvider } from './Config/AuthProvider';
import Institutes from './Pages/User/Institutes';
import Course from './Pages/User/Course';
import Subject from './Pages/User/Subject';
import ExamList from './Components/ExamList';
import QuestionList from './Components/QuestionList';
import Loader from './Components/Loader';
import Result from './Pages/User/Result';
import EnrollCourse from './Pages/User/EnrollCourse';
import UserList from './Pages/User/UserList';
import ExamPage from './Pages/User/ExamPage';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
              <Route path="/" element={<HomeHeader />}>
                <Route index element={ <Home/>}/>
                <Route path='service' element={<Service/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='signup' element={<Register/>}/>
                <Route path='login' element={<Login/>}/>
            </Route>
            <Route path='/profile' element={<ProfileHeader />}>
              <Route index element={<Profile />} />
              <Route path='setting/:userId' element={ <Setting/>}/>
              <Route path='institute/:Iid' element={ <Institutes/>}/>
              <Route path='userlist/:userId' element={<UserList/>}/>
              <Route path='course/:Iid' element={ <Course/>}/>
              <Route path='subject/:Sid' element={<Subject />}>
                <Route path='examlist' element={ <ExamList/>}/>
                <Route path='questionlist' element={ <QuestionList/>}/>
              </Route>
              <Route path='enrollcourse/:userId/:Iid' element={<EnrollCourse/>}/>
              <Route path='result/:userId' element={<Result/>}/>
              <Route path="exampage/:Exid" element={<ExamPage/> }/>
            </Route>
            {/* Page Not Found */}
            <Route path="loader" element={<Loader/> }/>
            <Route path='*' element={ <NotFound/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
