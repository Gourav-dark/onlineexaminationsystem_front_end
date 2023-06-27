import { useState} from "react";
import InPut from "../../Components/InPut";
import InstituteList from "../../Components/InstituteList";
import { useSignupAPI } from "../../Config/UserAPI";
import { useRegisterInstituteApi } from "../../Config/InstituteAPI";

//CSS
import "../../Assets/Styles/Register.css";

const Register = () => {
    const [Registration, setRegistration] = useState("Registration Form:");
    //Institute List or Register 
    const [IsActive, setIsActive] = useState(false);
    //
    const[InstituteId,setInstituteId] = useState(0);
    var Usertype=4;
    // Button Events
    const [StudentActive, setStudentActive] = useState("active");
    const [ExaminerActive, setExaminerActive] = useState("");
    const [InstituteUserActive, setInstituteUserActive] = useState("");
    // Institute registration Details
    const [InstituteDetail, setInstituteDetail] = useState({
      instituteName: "Game over",
      location: "VIP Road",
      city: "Kolkata",
      postalCode: "700052",
      state: "West Bengal",
      country: "India"
    });
    //User registration details
    const [UserDetail, setUserDetail] = useState({
        fname: "Student",
        lname: "User",
        gender: "F",
        dob: "1998-11-11",
        email: "abcdefg@gmail.com",
        phoneNumber: "8562713396",
        password: "12345",
        confirmPassword: "12345"
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
        Usertype=value;
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
            if(Res.StatusCode===200){
                I_id=Res.Id;
                forreg=true;
                console.log(Res.Massage);
                // console.log(I_id);
                // console.log(Res.Id);
            }else{
                console.log(Res.Massage);
                forreg=false;
            }
        }
        if(forreg){
            const userDetail = {
                user:UserDetail,
                roleId: Usertype,
                Iid:I_id
                };
            const Res = await signupApi(userDetail);
            if (Res.StatusCode === 200) {
                // console.log(Res);
                console.log(Res.Massage);
                //Redirect Code and massage 
            } else {
                console.log(Res.Massage);
                // only Massage
            }
        }
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
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">{Registration}</h3>
                                    {/* Institute Details Register */}
                                    { IsActive &&
                                    <div>
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
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
                                            <div className="col-md-6 mb-4">
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
                                            <div className="col-md-6 mb-4">
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
                                            <div className="col-md-6 mb-4">
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
                                            <div className="col-md-6 mb-4">

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
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">Institute Admin Form:</h3>
                                    </div>
                                    }
                                    {/* User Register */}
                                    <div>
                                        <div className="row">
                                                <div className="col-md-6 mb-4">
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
                                                <div className="col-md-6 mb-4">

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
                                                <div className="col-md-6 mb-4">
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
                                                <div className="col-md-6 mb-4">
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
                                                <div className="col-md-6 mb-4 pb-2">
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
                                                <div className="col-md-6 mb-4 pb-2">

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
                                                <div className="col-md-6 mb-4 pb-2">

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
                                                <div className="col-md-6 mb-4 pb-2">

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
                                    <div className="mt-2 pt-2">
                                        <button className="btn btn-primary btn-lg" onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Register