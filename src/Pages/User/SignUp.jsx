// import { useEffect,useState } from "react";
// import { InstituteListAPI , useRegisterInstituteApi} from "../../Config/InstituteAPI";
// import { useSignupAPI } from "../../Config/UserAPI";

// //css
// import "../../Assets/Styles/SignUp.css";

// const SignUp = () => {
//   //set top name
//   const [Registration, setRegistration] = useState("Registration Form:")
//   // is for buttonname
//   const [StudentActive,setStudentActive]=useState("active")
//   const [ExaminerActive,setExaminerActive]=useState("")
//   const [InstituteUserActive, setInstituteUserActive] = useState("")
  
//   //list of institutes
//   const [DisplayList, setDisplayList] = useState("");
//   //set institute id
//   const [InstituteId,setInstituteId]=useState(0);
//   //User Type
//   const [UserType, setUserType] = useState(4);
//   const [Institutelist, setInstitutelist] = useState([]);
//   const [Instituteregister, setInstiteregister] =useState("d-none");
//   const [SignupDetail, setSignupDetail] = useState({
//     fname: "Student",
//     lname: "User",
//     gender: "F",
//     dob: "1998-11-11",
//     email: "abcdefg@gmail.com",
//     phoneNumber: "8562713396",
//     password: "12345",
//     confirmPassword: "12345"
//   });
//   const [InstituteDetail,setInstituteDetail]=useState({
//       "instituteName": "Game over",
//       "location": "VIP Road",
//       "city": "Kolkata",
//       "postalCode": "700052",
//       "state": "West Bengal",
//       "country": "India"
//   });
//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setSignupDetail((prev) => {
//       return { ...prev, [name]: value };
//     });
//   }
//   useEffect(()=>{
//     const ListFunction = async () => {
//       const Res = await InstituteListAPI();
//       if (Res.StatusCode === 200) {
//         setInstitutelist(Res.Institutelist);
//         // console.log(Res.Institutelist);
//       }
//       else {
//         console.log("Data not Fatch");
//       }
//     }
//     ListFunction();
//   }, []);
//   const userDetail = {
//     user:SignupDetail,
//     roleId: UserType,
//     Iid:InstituteId
//   };
//   const signupApi = useSignupAPI();
//   const registerInstituteApi = useRegisterInstituteApi();
//   const SubmitHandle = async () => {
//     if (InstituteUserActive === "active") {
//       const Res = await registerInstituteApi(InstituteDetail);
//       if (Res.StatusCode === 200) {
//         console.log("Sign up M="+Res.Message);
//         console.log("sign page Id"+Res.Id);
//         setInstituteId(Res.Id);
//         console.log(InstituteId);
//         if (Res.Id === 0) {
//           console.log("Why not set the institute Id");
//         }
//       } else {
//         console.log(Res.MassageMessage);
//       }
//     }
//     console.log(userDetail);
//     console.log(InstituteDetail);
//     const Res = await signupApi(userDetail);
//     if (Res.StatusCode === 200) {
//       console.log(Res);
//       console.log("Sign IN" + Res.Massage);
//       //Redirect Code and massage 
//     } else {
//       console.log("Register" + Res.Massage);
//       // only Massage
//     }
//   }
//   ///institute Registered
//     const handlebyInput = (event) => {
//         const { name, value } = event.target;
//         setInstituteDetail((prev) => {
//             return { ...prev, [name]: value };
//         });
//   }
//   const changeDetail=(e)=>{
//     const { name,value }=e.target;
//     switch(name){
//       case "UserType":
//         setUserType(value);
//         setRegistration("Registration Form");
//         setDisplayList("");
//         setInstiteregister("d-none");
//         switch(value){
//           case "2":
//             setDisplayList("d-none");
//             setInstiteregister("");
//             setRegistration("Institute Registration Form:")
//             setInstituteUserActive("active");
//             setStudentActive("");
//             setExaminerActive("");
//             break;
//           case "3":
//             setInstituteUserActive("");
//             setStudentActive("");
//             setExaminerActive("active");
//             break;
//           case "4":
//             setInstituteUserActive("");
//             setStudentActive("active");
//             setExaminerActive("");
//             break;
//           default:
//             setInstituteUserActive("");
//             setStudentActive("active");
//             setExaminerActive("");
//         }
//         break;
//       case "InstituteId":
//         setInstituteId(value);
//         break;
//       default:
//         // setInstituteId(4);
//     }
//   }
//   return (
//     <>
//       <div className="SignUp">
//         <div className="btn-group btn-group-lg SignUp-btn-group mt-1 sticky-top" role="group" aria-label="Basic example">
//           <button className={`btn btn-outline-light px-md-5 px-sm-4 ${StudentActive}`} name="UserType" onClick={changeDetail} value="4">Student</button>
//           <button className={`btn btn-outline-light px-md-5 px-sm-4 ${ExaminerActive}`} name="UserType" onClick={changeDetail} value="3">Examiner</button>
//           <button className={`btn btn-outline-light px-md-5 px-sm-4 ${InstituteUserActive}`} name="UserType" onClick={changeDetail} value="2">Institute User</button>
//         </div>
//       </div>
//       <section className="vh-75">
//         <div className="container py-2 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-12 col-lg-9 col-xl-7">
//               <div className="card shadow-2-strong card-registration  bg-dark text-white" style={{borderradius: "15px"}}>
//                 <div className="card-body p-4 p-md-4">
//                   <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">{Registration}</h3>
//                   {/* <InstituteRegister/> */}
//                   <div className={`InstituteDetail_Register ${Instituteregister}`}>
//                       <div className="row">
//                           <div className="col-md-12 mb-4">
//                               <div className="form-outline w-100">
//                                   <input type="text" className="form-control form-control-lg" name="instituteName" value={InstituteDetail.instituteName} onChange={handlebyInput}/>
//                                   <label className="form-label">Institute Name</label>
//                               </div>
//                           </div>
//                       </div>
//                       <div className="row">
//                           <div className="col-md-6 mb-4">
//                               <div className="form-outline">
//                                   <input type="text" className="form-control form-control-lg" name="location" value={InstituteDetail.location} onChange={handlebyInput}/>
//                                   <label className="form-label">Location</label>
//                               </div>
//                           </div>
//                           <div className="col-md-6 mb-4">
//                               <div className="form-outline">
//                                   <input type="number" className="form-control form-control-lg" name="postalCode" value={InstituteDetail.postalCode} onChange={handlebyInput}/>
//                                   <label className="form-label">Postal Code</label>
//                               </div>
//                           </div>
//                       </div>
//                       <div className="row">
//                           <div className="col-md-6 mb-4">
//                               <div className="form-outline">
//                                   <input type="text" className="form-control form-control-lg" name="state" value={InstituteDetail.state} onChange={handlebyInput}/>
//                                   <label className="form-label">State</label>
//                               </div>
//                           </div>
//                           <div className="col-md-6 mb-4">

//                               <div className="form-outline">
//                                   <input type="text" className="form-control form-control-lg" name="country" value={InstituteDetail.country} onChange={handlebyInput}/>
//                                   <label className="form-label">Country</label>
//                               </div>
//                           </div>
//                       </div>
//                       <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">Institute Admin Form:</h3>
//                       </div>
//                     <div className="row">
//                       <div className="col-md-6 mb-4">

//                         <div className="form-outline">
//                           <input type="text" className="form-control form-control-lg" name="fname" onChange={handleInput} value={SignupDetail.fname} />
//                           <label className="form-label">First Name</label>
//                         </div>

//                       </div>
//                       <div className="col-md-6 mb-4">

//                         <div className="form-outline">
//                           <input type="text" className="form-control form-control-lg" name="lname" onChange={handleInput} value={SignupDetail.lname}/>
//                           <label className="form-label">Last Name</label>
//                         </div>

//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6 mb-4 d-flex align-items-center">

//                         <div className="form-outline datepicker w-100">
//                           <input type="date" className="form-control form-control-lg" name="dob" onChange={handleInput} value={SignupDetail.dob}/>
//                           <label className="form-label">Birthday</label>
//                         </div>

//                       </div>
//                       <div className="col-md-6 mb-4">

//                         <h6 className="mb-2 pb-1">Gender: </h6>

//                         <div className="form-check form-check-inline">
//                           <input className="form-check-input" type="radio" name="gender" value="F" onChange={handleInput} checked/>
//                           <label className="form-check-label">Female</label>
//                         </div>

//                         <div className="form-check form-check-inline">
//                           <input className="form-check-input" type="radio" name="gender" value="M" onChange={handleInput}/>
//                           <label className="form-check-label">Male</label>
//                         </div>

//                         <div className="form-check form-check-inline">
//                           <input className="form-check-input" type="radio" name="gender" value="O" onChange={handleInput}/>
//                           <label className="form-check-label" name="gender">Other</label>
//                         </div>

//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6 mb-4 pb-2">

//                         <div className="form-outline">
//                           <input type="email" name="email" className="form-control form-control-lg" onChange={handleInput} value={SignupDetail.email} />
//                           <label className="form-label">Email</label>
//                         </div>

//                       </div>
//                       <div className="col-md-6 mb-4 pb-2">

//                         <div className="form-outline">
//                           <input type="tel" name="phoneNumber" className="form-control form-control-lg" onChange={handleInput} value={SignupDetail.phoneNumber}/>
//                           <label className="form-label">Phone Number</label>
//                         </div>

//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-6 mb-4 pb-2">

//                         <div className="form-outline">
//                           <input type="password" name="password" className="form-control form-control-lg" onChange={handleInput} value={SignupDetail.password}/>
//                           <label className="form-label">Password</label>
//                         </div>

//                       </div>
//                       <div className="col-md-6 mb-4 pb-2">

//                         <div className="form-outline">
//                           <input type="password" name="confirmPassword" className="form-control form-control-lg" onChange={handleInput} value={SignupDetail.confirmPassword}/>
//                           <label className="form-label">Confirm Password</label>
//                         </div>

//                       </div>
                      
//                     </div>
//                     <div className={`row ${DisplayList}`}>
//                       <div className="col-12">
//                         <select className="select form-control-lg w-100 select-custom-size" name="InstituteId" onSelect={changeDetail}>
//                           <option>Choose option</option>
//                         {
//                           Institutelist.map((InstituteDetail) => { 
//                             const { id, instituteName,city } = InstituteDetail;
//                             return <option key={id} value={id}>{instituteName}, {city}</option>
//                           })
//                         }
//                         </select>
//                         <label className="form-label select-label ms-2">Select Institute Name</label>
//                       </div>
//                     </div>
//                     <div className="mt-2 pt-2">
//                       <button className="btn btn-primary btn-lg" onClick={SubmitHandle}>Submit</button>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default SignUp;
