import { useEffect,useState } from "react";
import InstituteListAPI from "../../Config/InstituteAPI";
import { useSignupAPI } from "../../Config/UserAPI";

//css
import "../../Assets/Styles/SignUp.css";
import InstituteRegister from "../../Components/InstituteRegister";

const SignUp = () => {
  const [Registration,setRegistration]=useState("Registration Form")
  const [StudentActive,setStudentActive]=useState("active")
  const [ExaminerActive,setExaminerActive]=useState("")
  const [InstituteActive,setInstitutective]=useState("")
  const [DisplayList,setDisplayList]=useState("");
  const [InstituteId,setInstituteId]=useState(0);
  const [UserType,setUserType]=useState(4);
  const [Institutelist, setInstitutelist] = useState([]);
  const [SignupDetail, setSignupDetail] = useState({
    fname: "Student",
    lname: "User",
    gender: "F",
    dob: "1998-11-11",
    email: "student1@gmail.com",
    phoneNumber: "8562713396",
    password: "12345",
    confirmPassword: "12345"
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setSignupDetail((prev) => {
      return { ...prev, [name]: value };
    });
  }
  const changeDetail=(e)=>{
    const { name,value }=e.target;
    switch(name){
      case "UserType":
        setUserType(value);
        setRegistration("Registration Form");
        setDisplayList("");
        switch(value){
          case "2":
            setDisplayList("d-none");
            setRegistration("Institute Registration Form")
            setInstitutective("active");
            setStudentActive("");
            setExaminerActive("");
            break;
          case "3":
            setInstitutective("");
            setStudentActive("");
            setExaminerActive("active");
            break;
          case "4":
            setInstitutective("");
            setStudentActive("active");
            setExaminerActive("");
            break;
          default:
            setInstitutective("");
            setStudentActive("");
            setExaminerActive("");
        }
        break;
      case "InstituteId":
        setInstituteId(value);
        break;
      default:
        setInstituteId(4);
    }
  }
  useEffect(()=>{
    const ListFunction=async()=>{
      const Res=await InstituteListAPI();
      if(Res.StatusCode===200){
        setInstitutelist(Res.Institutelist);
      }
      else{
        console.log("Data not Fatch");
      }
    }
    ListFunction();
  }, []);
  const userDetail = {
    user:SignupDetail,
    roleId: UserType,
    Iid:InstituteId
  };
  const signupApi = useSignupAPI();
  const SubmitHandle=async()=>{
    console.log(userDetail);
    const Res = await signupApi(userDetail);
    if (Res.StatusCode === 200) {
      console.log(Res);
      console.log("Sign IN" + Res.Massage);
      //Redirect Code and massage 
    } else {
      console.log("Sign Fails" + Res.Massage);
      // only Massage
    }
  }
  return (
    <>
      <div className="SignUp">
        <div className="btn-group btn-group-lg SignUp-btn-group mt-1 sticky-top" role="group" aria-label="Basic example">
          <button className={`btn btn-outline-light px-md-5 px-sm-4 ${StudentActive}`} name="UserType" onClick={changeDetail} value="4">Student</button>
          <button className={`btn btn-outline-light px-md-5 px-sm-4 ${ExaminerActive}`} name="UserType" onClick={changeDetail} value="3">Examiner</button>
          <button className={`btn btn-outline-light px-md-5 px-sm-4 ${InstituteActive}`} name="UserType" onClick={changeDetail} value="2">Institute User</button>
        </div>
      </div>
      {/* <Outlet/> */}
      <section className="vh-75">
        <div className="container py-2 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration  bg-dark text-white" style={{borderradius: "15px"}}>
                <div className="card-body p-4 p-md-4">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">{Registration}</h3>
                    {/* <InstituteRegister/> */}
                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" className="form-control form-control-lg" name="fname" onChange={handleInput} value={SignupDetail.fname} />
                          <label className="form-label">First Name</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" className="form-control form-control-lg" name="lname" onChange={handleInput} value={SignupDetail.lname}/>
                          <label className="form-label">Last Name</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">

                        <div className="form-outline datepicker w-100">
                          <input type="date" className="form-control form-control-lg" name="dob" onChange={handleInput} value={SignupDetail.dob}/>
                          <label className="form-label">Birthday</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="F" onChange={handleInput} checked/>
                          <label className="form-check-label">Female</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="M" onChange={handleInput}/>
                          <label className="form-check-label">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="O" onChange={handleInput}/>
                          <label className="form-check-label" name="gender">Other</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="email" name="email" className="form-control form-control-lg" onChange={handleInput} value={SignupDetail.email} />
                          <label className="form-label">Email</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="tel" name="phoneNumber" className="form-control form-control-lg" onChange={handleInput} value={SignupDetail.phoneNumber}/>
                          <label className="form-label">Phone Number</label>
                        </div>

                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="password" name="password" className="form-control form-control-lg" onChange={handleInput} value={SignupDetail.password}/>
                          <label className="form-label">Password</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="password" name="confirmPassword" className="form-control form-control-lg" onChange={handleInput} value={SignupDetail.confirmPassword}/>
                          <label className="form-label">Confirm Password</label>
                        </div>

                      </div>
                      
                    </div>
                    <div className={`row ${DisplayList}`}>
                      <div className="col-12">
                        <select className="select form-control-lg w-100 select-custom-size" name="InstituteId" onChange={changeDetail}>
                          <option value="0">Choose option</option>
                        {
                          Institutelist.map((InstituteDetail) => { 
                            const { id, instituteName,city } = InstituteDetail;
                            return <option key={id} value={id}>{instituteName}, {city}</option>
                          })
                        }
                        </select>
                        <label className="form-label select-label ms-2">Select Institute Name</label>
                      </div>
                    </div>
                    <div className="mt-2 pt-2">
                      <button className="btn btn-primary btn-lg" onClick={SubmitHandle}>Submit</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SignUp;
