import { Link,useNavigate } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import useLoginAPI from '../../Config/UserAPI';

import "../../Assets/Styles/Login.css";

const Login = () => {
  const navigate=useNavigate();
  const [massage, setMassage] = useState("");
  const [alertClass, setAlertClass] = useState('');
  const [loginDetail, setLoginDetail] = useState({
    Email: "admin@gmail.com",
    Password: "Admin@123"
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setLoginDetail((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const loginAPI = useLoginAPI();
  const handleSubmit = async () => {
    const response = await loginAPI(loginDetail);
      setMassage(response.Massage);
    if (response.StatusCode === 200) {
      setAlertClass("alert-success show");
      //Redireact Code for profile
    } else {
      setAlertClass("alert-danger show");
    }
  };
  const HideButton=()=>{
    setAlertClass('d-none');
  }
  return (
    <div className='Login'>
      <section className="h-50 mt-4">
        <div className="container py-2">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-10 col-md-8 col-lg-6 col-xl-4">
              <div className="card bg-dark text-white" style={{borderradius: "1rem"}}>
                <div className="card-body p-4 text-center">

                  <div className="mb-md-2 mt-md-2">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your Email and password!</p>

                    <div className="form-outline form-white mb-2">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" name='Email' value={loginDetail.Email} onChange={handleInput}/>
                      <label className="form-label mt-1">Email</label>
                    </div>

                    <div className="form-outline form-white mb-3">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" name='Password' value={loginDetail.Password} onChange={handleInput}/>
                      <label className="form-label mt-1">Password</label>
                    </div>

                    <p className="small pb-lg-2"><Link className="text-white-50" to="/forgetpassword">Forgot password?</Link></p>

                    <button className="btn btn-outline-light btn-lg px-5 login-btn" onClick={handleSubmit}>Login<span><BiLogIn/></span></button>
                  </div>
                  <div>
                    <p className="mt-3">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`alert alert-dismissible alert-Login position-absolute top-50 start-50 translate-middle fade ${alertClass}`} role="alert">
        <strong className='mx-3'>{massage}</strong> 
        <button type="button" className="btn-close" onClick={HideButton}></button>
      </div>
    </div>
  );
};

export default Login;
