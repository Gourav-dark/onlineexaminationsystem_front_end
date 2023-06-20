
import { useState } from "react";
import API from "../../Config/Config";

const Login = () => {
  const [Error, setError] = useState('');
  const [Response, setResponse] = useState('');
  const [LoginDetail, setLoginDetail] = useState(
    {
      Email: "admin@gmail.com",
      Password:"Admin@12"
    });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setLoginDetail((prev) => {
      return { ...prev, [name]: value };
     });
  }
  const handleSubmit = async() => {
    // console.log(LoginDetail);
    try {
      const res =await API.post("Users/Login", LoginDetail);
      const { token,massage } = res.data;
      console.log(res.data);
      setResponse(token + " " + massage);
      
    } catch (error) {
      console.log(error);
      const { massage } = error.response.data;
      setError(massage);
      console.log(error);
    }
  }
  return (
    <div>
      <label>
          Email:
          <input type="email" name="Email" value={LoginDetail.Email} onChange={handleInput} />
      </label>
      <label>
          Password:
          <input type="password" name="Password" value={LoginDetail.Password} onChange={handleInput} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      {Error !== "" && <h1>{Error}</h1>}
      <h1>{Response}</h1>
    </div>
  )
}
export default Login
