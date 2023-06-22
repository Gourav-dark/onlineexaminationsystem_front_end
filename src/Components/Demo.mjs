import axios from "axios";
import api from "../Config/Config";
import { useEffect,useState } from "react";

export default function Demo() {
  const [institutelist, setinstitutelist] = useState([]);
  const [Error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://localhost:7289/api/InstituteDetails/InstituteList")
      .then((response) =>
      {
        setinstitutelist(response.data);
        console.log(response.data);
      })
      .catch((error) => { 
        setError(error);
        console.log(error);
      })
  }, []);
  // using Async Await
  const getApiData = async () => {
    setinstitutelist(response.data);
    try {
      const response = api.get("InstituteDetails/InstituteList");
      
    } catch(error) {
      setError(error);
    }
  }
  return (
    <div>
      {Error !== "" && <h2>{Error}</h2>}
      {
        institutelist.map((InstituteDetail) => { 
          const { id, instituteName, location, city, postalCode, state, country } = InstituteDetail;
          return <div key={id}>
              <h3>{id}</h3>
              <h3>{instituteName}</h3>
              <h3>{location}</h3>
              <h3>{city}</h3>
              <h3>{postalCode}</h3>
              <h3>{state}</h3>
              <h3>{country}</h3>
            </div>
        })
      }
    </div>
  );
}
// import jwtDecode from "jwt-decode";
// import { useState } from "react";
// import { useCookies } from 'react-cookie';

// const JwtToken = () => {
//   const [emailAddress, setEmailAddress] = useState('');
//   const [cookies, setCookie,removeCookie] = useCookies(['user']);
//   const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIlJvbGUiOiJBZG1pbiIsIlVzZXJJZCI6IjkzZjU2MDYyLWI1ODktNDJhMi0zYjQ3LTA4ZGI2ZmI5MWQ2ZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjg3MjkzMzM2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3Mjg5IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI4OSJ9.QtNp2W9I-tk4QIsiF2Dt6K-hNW8_zhW-JKGeKPS3GAo";

//   const decodeJwtToken = () => {
//     try {
//       const decodedToken = jwtDecode(Token);
//         console.log(decodedToken);
//         console.log(decodedToken.exp);
//         console.log(decodedToken.Role);
//         console.log(decodedToken.Email);
//         console.log(decodedToken.role);
//         console.log(decodedToken.UserId);
//         const Email = decodedToken.Email;
//         // console.log(Email);
//       setEmailAddress(Email);
//       // Handlecookie();
//     } catch (error) {
//       console.error("Error decoding JWT token:", error);
//     }
//   }
//   const Handlecookie = () => {
//     console.log(cookies);
//     setCookie('Jwt', Token);
//     console.log(cookies);
//   };
//   const RemoveCookie = () => {
//     // console.log(cookies);
//     removeCookie('Jwt');
//     console.log(cookies);
//   };
//   return (
//     <div>
//       <button onClick={decodeJwtToken}>Decode</button>
//       <button onClick={RemoveCookie}>Remove</button>
//       <button onClick={Handlecookie}>Add</button>
//       <h1>Email Address: {emailAddress}</h1>
//     </div>
//   );
// }

// export { JwtToken };



// //set cookies
// const [cookies, setCookie] = useCookies(['user']);
// setCookie("Name", "value",{path:"/"});
// ///get cookie
//  const [cookies] = useCookies(['user']);
//     const getCookieData = cookies.Jwt;