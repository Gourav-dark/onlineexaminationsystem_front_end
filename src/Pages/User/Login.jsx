import { Link,useNavigate } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import { useState, useContext } from "react";
import useLoginAPI from '../../Config/UserAPI';
import { AuthContext } from "../../Config/AuthProvider";
import Loader from "../../Components/Loader";

import "../../Assets/Styles/Login.css";

const Login = () => {
  const [Loading,setLoading]=useState(false);
  //Access access
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [classname,setclassname]=useState("");
  const [Message, setMessage] = useState("");
  const [show,setshow]=useState(false);
  const [loginDetail, setLoginDetail] = useState({
    Email: "",
    Password: ""
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setLoginDetail((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const loginAPI = useLoginAPI();
  const handleSubmit = async () => {
    setLoading(true);
    const response = await loginAPI(loginDetail);
      setMessage(response.Message);
    if (response.StatusCode === 200) {
      setshow(!show);
      setclassname("alert-success");
      login(response.Token);

      // navigate('/profile');
      setTimeout(()=>navigate("/profile"),1000);
      // navigate("/profile");
      //Redireact Code for profile
    } else {
        setshow(!show);
        setclassname("alert-danger");
      // window.location.reload();
    }
    setLoading(false);
  };
  const closebtn=()=>{
    setshow(!show);
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
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" name='Email' value={loginDetail.Email} onChange={handleInput} required placeholder='Email'/>
                      <label className="form-label mt-1">Email</label>
                    </div>

                    <div className="form-outline form-white mb-3">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" name='Password' value={loginDetail.Password} onChange={handleInput} required placeholder='Password'/>
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
      {show && 
        <div className={`alert d-flex justify-content-between w-25 position-absolute top-50 start-50 translate-middle ${classname}`} role="alert">
            {Message}
            <button type="button" className="btn-close" onClick={closebtn}></button>
        </div>
      }
      {Loading && <Loader/>}
    </div>
  );
};

export default Login;
