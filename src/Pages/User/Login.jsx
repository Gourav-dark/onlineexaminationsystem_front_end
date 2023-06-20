
import URL from "../../Config/Config";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Email":
          setEmail(value);
          break;
      case "Password":
          setPassword(value);
          break;
      default:
            break;
    }
  };
  const loginDetail=JSON.stringify(
    {
      Email,Password
    }
  );
  const customConfig = {
    headers: {
    'Content-Type': 'application/json'
    }
  };
  const handleSubmit=()=>{
    const url=URL+"User/Login";
    console.log(url);
    console.log(loginDetail);
    console.log(customConfig);
    axios
    .post(url,loginDetail)
    .then((response) =>{
      console.log(response);
    });
  }
  return (
    <div>
      {/* <form> */}
      <label>
          Email:
          <input type="email" name="Email" value={Email} onChange={handleInputChange} />
      </label>
      <label>
          Password:
          <input type="password" name="Password" value={Password} onChange={handleInputChange} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      {/* </form> */}
    </div>
  )
}
export default Login
