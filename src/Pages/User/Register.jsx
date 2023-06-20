// // import { useState } from "react";
// // const StudentSignUp = () => {
// //     return (
// //       <>
// //       </>
// //     );
// // }
// // export default StudentSignUp;
// // const ExamimerSignUp = () => {
// //     return (
// //         <>
// //         </>
// //     );
// // }
// // const InstituteUserSignUp = () => {
// //     return (
// //         <>
// //         </>
// //     );
// // }
// //   const SignUp = () => {
// //   const [FName, setFName] = useState("");
// //   const [LName, setLName] = useState("");
// //   const [Gender, setGender] = useState("");
// //   const [DOB, setDOB] = useState("");
// //   const [Email, setEmail] = useState("");
// //   const [PhoneNumber, setPhoneNumber] = useState("");
// //   const [Password, setPassword] = useState("");
// //   const [ConfirmPassword, setConfirmPassword] = useState("");
// //   const [RoleId, setRoleId] = useState();  
// //   const [InstituteId, setInstituteId] = useState();  
// //   return (
// //     <>
// //     </>
// //   );
// // }
// import React, { useState } from "react";

// const SignUp = () => {
//   const [FName, setFName] = useState("");
//   const [LName, setLName] = useState("");
//   const [Gender, setGender] = useState("");
//   const [DOB, setDOB] = useState("");
//   const [Email, setEmail] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [Password, setPassword] = useState("");
//   const [ConfirmPassword, setConfirmPassword] = useState("");
//   const [RoleId, setRoleId] = useState();
//   const [InstituteId, setInstituteId] = useState();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "FName":
//         setFName(value);
//         break;
//       case "LName":
//         setLName(value);
//         break;
//       case "Gender":
//         setGender(value);
//         break;
//       case "DOB":
//         setDOB(value);
//         break;
//       case "Email":
//         setEmail(value);
//         break;
//       case "PhoneNumber":
//         setPhoneNumber(value);
//         break;
//       case "Password":
//         setPassword(value);
//         break;
//       case "ConfirmPassword":
//         setConfirmPassword(value);
//         break;
//       case "RoleId":
//         setRoleId(value);
//         break;
//       case "InstituteId":
//         setInstituteId(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     // You can access the form values using the state variables
//     console.log({
//       FName,
//       LName,
//       Gender,
//       DOB,
//       Email,
//       PhoneNumber,
//       Password,
//       ConfirmPassword,
//       RoleId,
//       InstituteId,
//     });
//   };

  
//     const displayValues = () => {
//       console.log("First Name:", FName);
//       console.log("Last Name:", LName);
//       console.log("Gender:", Gender);
//       console.log("Date of Birth:", DOB);
//       console.log("Email:", Email);
//       console.log("Phone Number:", PhoneNumber);
//       console.log("Password:", Password);
//       console.log("Confirm Password:", ConfirmPassword);
//       console.log("Role ID:", RoleId);
//       console.log("Institute ID:", InstituteId);
//     };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="FName"
//           value={FName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="LName"
//           value={LName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Gender:
//         <input
//           type="text"
//           name="Gender"
//           value={Gender}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Date of Birth:
//         <input
//           type="Date"
//           name="DOB"
//           value={DOB}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           name="Email"
//           value={Email}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Phone Number:
//         <input
//           type="tel"
//           name="PhoneNumber"
//           value={PhoneNumber}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           name="Password"
//           value={Password}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Confirm Password:
//         <input
//           type="password"
//           name="ConfirmPassword"
//           value={ConfirmPassword}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Role ID:
//         <input
//           type="text"
//           name="RoleId"
//           value={RoleId}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Institute ID:
//         <input
//           type="text"
//           name="InstituteId"
//           value={InstituteId}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <button onClick={displayValues}>Submit</button>
//     </form>
//   );
// };

// export default SignUp;
