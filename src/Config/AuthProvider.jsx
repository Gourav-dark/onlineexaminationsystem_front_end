import { createContext, useState, useEffect } from 'react';
// import ProfileHeader from '../Layouts/Header/ProfileHeader';
// import Login from "../Pages/User/Login";

const AuthContext = createContext();

// const AuthProvider = () => {
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  const isAuthenticated = token !== '';

  return (
      <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {/* <Login /> */}
      {/* <ProfileHeader/> */}
      {children}
      </AuthContext.Provider>
  );
};
export {AuthContext, AuthProvider };
