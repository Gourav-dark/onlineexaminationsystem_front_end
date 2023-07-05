import { useState} from "react";
import InPut from "../../Components/InPut";
import InstituteList from "../../Components/InstituteList";
import { useSignupAPI } from "../../Config/UserAPI";
import { useRegisterInstituteApi } from "../../Config/InstituteAPI";

//CSS
import "../../Assets/Styles/Register.css";

const Register = () => {
    //Message shower
    const [classname,setclassname]=useState("");
    const [show,setshow]=useState(false);
    const [Message ,setMessage]=useState("");

    const [Registration, setRegistration] = useState("Registration Form:");
    //Institute List or Register 
    const [IsActive, setIsActive] = useState(false);
    //
    const[InstituteId,setInstituteId] = useState(0);
    var [Usertype,setUsertype]=useState(4);
    // Button Events
    const [StudentActive, setStudentActive] = useState("active");
    const [ExaminerActive, setExaminerActive] = useState("");
    const [InstituteUserActive, setInstituteUserActive] = useState("");
    // Institute registration Details
    const [InstituteDetail, setInstituteDetail] = useState({
      instituteName: "",
      location: "",
      city: "",
      postalCode: "",
      state: "",
      country: ""
    });
    //User registration details
    const [UserDetail, setUserDetail] = useState({
        fname: "",
        lname: "",
        gender: "",
        dob: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });
    // Handles Functions
    const handleInputChange_ID = (event) => { 
        const { name, value } = event.target;
        // console.log(name+" "+value);
        setInstituteDetail((prev) => {
            return { ...prev, [name]: value };
        });
    }
    const handleInputChange_UD = (event) => { 
        const { name, value } = event.target;
        // console.log(name+" "+value);
        setUserDetail((prev) => {
            return { ...prev, [name]: value };
        });
    }
    const handleOnClick = (event) => {
        const { name, value } = event.target;
        setUsertype(value);
        // console.log(Usertype);
        setIsActive(false);
        setRegistration("Registration Form:");
        switch(name){
            case "student":
                setExaminerActive("");
                setStudentActive("active");
                setInstituteUserActive("");
                break;
            case "examiner":
                setExaminerActive("active");
                setStudentActive("");
                setInstituteUserActive("");

                break;
            case "instituteuser":
                setExaminerActive("");
                setStudentActive("");
                setInstituteUserActive("active");
                setIsActive(true);
                setRegistration("Institute Registration Form:");
                break;
            default:
        }
    }
    const Callback=(id)=>{
        setInstituteId(id);
        // console.log("Come"+id);
    }

    const ApiInscall = useRegisterInstituteApi();
    const signupApi = useSignupAPI();
    const handleSubmit = async() => {
        var forreg=true;
        var I_id=InstituteId;
        if(IsActive){
            const Res=await ApiInscall(InstituteDetail);
            setMessage(Res.Message);
            if(Res.StatusCode===200){
                I_id=Res.Id;
                forreg=true;
                setshow(!show);
                setclassname("alert-success");
                // console.log(Res.Message);
                // console.log(I_id);
                // console.log(Res.Id);
            }else{
                // console.log(Res.Message);
                setshow(!show);
                setclassname("alert-danger");
                forreg=false;
            }
        }
        if (forreg) {
            const userData = {
                user:UserDetail,
                roleId: Usertype,
                Iid:I_id
            };
            console.log(userData);
            const Res = await signupApi(userData);
            setMessage(Res.Message);
            if (Res.StatusCode === 200) {
                // console.log(Res);
                setshow(!show);
                setclassname("alert-success");
                setMessage(Res.Message+" Please visit Login Page.");
                // console.log(Res.Message);
                //Redirect Code and Message
                setInstituteDetail({
                    instituteName: "",
                    location: "",
                    city: "",
                    postalCode: "",
                    state: "",
                    country: ""
                });
                setUserDetail({
                    fname: "",
                    lname: "",
                    gender: "",
                    dob: "",
                    email: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword: ""
                });
            } else {
                setshow(!show);
                setclassname("alert-danger");
                // console.log(Res.Message);
                // only Message
            }
        }
    }
    const closebtn=()=>{
        setshow(!show);
    }
    return (
        <div className="Register">
            <div className="ChangeUserTypeBtn">
                <div className="btn-group btn-group-lg SignUp-btn-group mt-1 sticky-top" role="group" aria-label="Basic example">
                    <button className={`btn btn-outline-light px-md-5 px-sm-4 ${StudentActive}`} name="student" onClick={handleOnClick} value="4">Student</button>
                    <button className={`btn btn-outline-light px-md-5 px-sm-4 ${ExaminerActive}`} name="examiner" onClick={handleOnClick} value="3">Examiner</button>
                    <button className={`btn btn-outline-light px-md-5 px-sm-4 ${InstituteUserActive}`} name="instituteuser" onClick={handleOnClick} value="2">Institute User</button>
                </div>
            </div>
            <section className="vh-75">
                <div className="container py-2 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration  bg-dark text-white" style={{borderradius: "15px"}}>
                                <div className="card-body p-4 p-md-4">
                                    <h3 className="mb-2 pb-2 pb-md-0 mb-md-3">{Registration}</h3>
                                    {/* Institute Details Register */}
                                    { IsActive &&
                                    <div>
                                        <div className="row">
                                            <div className="col-md-12 mb-2">
                                                <div className="form-outline w-100">
                                                    <InPut
                                                        label="Institute Name"
                                                        labelclass="form-label"
                                                        input={{
                                                            type: "text",
                                                            name: "instituteName",
                                                            className: "form-control form-control-lg",
                                                            placeholder: "Enter Institute Name",
                                                            onChange: handleInputChange_ID,
                                                            value: InstituteDetail.instituteName
                                                        }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <InPut
                                                        label="Location"
                                                        labelclass="form-label"
                                                        input={{
                                                            type: "text",
                                                            name: "location",
                                                            className: "form-control form-control-lg",
                                                            placeholder: "Location",
                                                            onChange: handleInputChange_ID,
                                                            value: InstituteDetail.location
                                                        }}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <InPut
                                                        label="Postal Code"
                                                        labelclass="form-label"
                                                        input={{
                                                            type: "number",
                                                            name: "postalCode",
                                                            className: "form-control form-control-lg",
                                                            placeholder: "Postal Code",
                                                            onChange: handleInputChange_ID,
                                                            value: InstituteDetail.postalCode
                                                        }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                        <InPut
                                                            label="City Name"
                                                            labelclass="form-label"
                                                            input={{
                                                                type: "text",
                                                                name: "city",
                                                                className: "form-control form-control-lg",
                                                                placeholder: "City",
                                                                onChange: handleInputChange_ID,
                                                                value: InstituteDetail.city
                                                        }}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <InPut
                                                        label="State"
                                                        labelclass="form-label"
                                                        input={{
                                                            type: "text",
                                                            name: "state",
                                                            className: "form-control form-control-lg",
                                                            placeholder: "State",
                                                            onChange: handleInputChange_ID,
                                                            value: InstituteDetail.state
                                                        }}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-2">

                                                    <div className="form-outline">
                                                        <InPut
                                                            label="Country"
                                                            labelclass="form-label"    
                                                            input={{
                                                            type: "text",
                                                            name: "country",
                                                            className: "form-control form-control-lg",
                                                            placeholder: "Country",
                                                            onChange: handleInputChange_ID,
                                                            value: InstituteDetail.country
                                                            }}/>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <h3 className="mb-2 pb-2 pb-md-0 mb-md-3">Institute Admin Form:</h3>
                                    </div>
                                    }
                                    {/* User Register */}
                                    <div>
                                        <div className="row">
                                                <div className="col-md-6 mb-2">
                                                    <div className="form-outline">
                                                        <InPut
                                                            label="First Name"
                                                            labelclass="form-label"
                                                            input={{
                                                                type: "text",
                                                                name: "fname",
                                                                className: "form-control form-control-lg",
                                                                placeholder: "Enter First Name",
                                                                onChange: handleInputChange_UD,
                                                                value: UserDetail.fname
                                                            }}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-2">

                                                    <div className="form-outline">
                                                        <InPut
                                                            label="Last Name"
                                                            labelclass="form-label"
                                                            input={{
                                                                type: "text",
                                                                name: "lname",
                                                                className: "form-control form-control-lg",
                                                                placeholder: "Enter Last Name",
                                                                onChange: handleInputChange_UD,
                                                                value: UserDetail.lname
                                                            }}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-2">
                                                        <InPut
                                                        label="Birthday"
                                                        labelclass="form-label"
                                                        input={{
                                                            type: "date",
                                                            name: "dob",
                                                            className: "form-control form-control-lg",
                                                            onChange: handleInputChange_UD,
                                                            value: UserDetail.dob
                                                        }}/>
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <h6 className="mb-2 pb-1">Gender: </h6>
                                                    <div className="form-check form-check-inline">                                                        
                                                            <InPut
                                                            label="Female"
                                                            labelclass="form-check-label"
                                                            input={{
                                                                type: "radio",
                                                                name: "gender",
                                                                className: "form-check-input",
                                                                onChange: handleInputChange_UD,
                                                                value: "F"
                                                            }}/>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                            <InPut
                                                            label="Male"
                                                            labelclass="form-check-label"
                                                            input={{
                                                                type: "radio",
                                                                name: "gender",
                                                                className: "form-check-input",
                                                                onChange: handleInputChange_UD,
                                                                value: "M"
                                                            }}/>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                            <InPut
                                                            label="Other"
                                                            labelclass="form-check-label"
                                                            input={{
                                                                type: "radio",
                                                                name: "gender",
                                                                className: "form-check-input",
                                                                onChange: handleInputChange_UD,
                                                                value: "O"
                                                            }}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-2 pb-2">
                                                    <div className="form-outline">
                                                            <InPut
                                                            label="Email"
                                                            labelclass="form-label"
                                                            input={{
                                                                type: "email",
                                                                name: "email",
                                                                className: "form-control form-control-lg",
                                                                placeholder: "Enter Email",
                                                                onChange: handleInputChange_UD,
                                                                value: UserDetail.email
                                                            }}/>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-2 pb-2">

                                                    <div className="form-outline">
                                                            <InPut
                                                            label="Phone Number"
                                                            labelclass="form-label"
                                                            input={{
                                                                type: "tel",
                                                                name: "phoneNumber",
                                                                className: "form-control form-control-lg",
                                                                placeholder: "Enter Phone Number",
                                                                onChange: handleInputChange_UD,
                                                                value: UserDetail.phoneNumber
                                                            }}/>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-2 pb-2">

                                                    <div className="form-outline">
                                                        <InPut
                                                            label="Password"
                                                            labelclass="form-label"
                                                            input={{
                                                                type: "password",
                                                                name: "password",
                                                                className: "form-control form-control-lg",
                                                                placeholder: "Enter Password",
                                                                onChange: handleInputChange_UD,
                                                                value: UserDetail.password
                                                            }}/>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-2 pb-2">

                                                    <div className="form-outline">
                                                        <InPut
                                                            label="Confirm Password"
                                                            labelclass="form-label"
                                                            input={{
                                                                type: "password",
                                                                name: "confirmPassword",
                                                                className: "form-control form-control-lg",
                                                                placeholder: "Enter Confirm Password",
                                                                onChange: handleInputChange_UD,
                                                                value: UserDetail.confirmPassword
                                                            }}/>
                                                    </div>

                                                </div>
                                            </div>
                                    </div>
                                    {
                                        !IsActive && <InstituteList handlecallback={Callback}/>
                                    }
                                    <div className="mt-0 pt-0 d-flex justify-content-center">
                                        <button className="btn btn-primary btn-lg px-4" onClick={handleSubmit}>Submit</button>
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
        </div>
    );
}
export default Register;
