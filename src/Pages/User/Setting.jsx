import { useState,useContext,useEffect } from "react";
import { AuthContext } from '../../Config/AuthProvider';
import InPut from "../../Components/InPut";
import { BiEdit } from "react-icons/bi";
import { useFindUserApI,useUpdateAPI } from "../../Config/UserAPI";
export default function Setting() {
    const [classname,setclassname]=useState("");
    const [show,setshow]=useState(false);
    const [Message ,setMessage]=useState("");

    const { token,user } = useContext(AuthContext);
    const [showuser, setshowuser] = useState({});
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
    const data={
        id:user.UserId,
        Token:token
      }
    const apiusercall = useFindUserApI();
    useEffect(()=>{
        const fun=async()=>{
            const res=await apiusercall(data);
            if(res.StatusCode===200){
                setshowuser(res.userdetail);
                setUserDetail(UserDetail=>({
                    ...UserDetail,
                    ...res.userdetail
                }));
            }
            else{
                console.log(res.Message);
            }
        }
        if (Object.keys(showuser).length === 0) {
            fun();
          }
    });
    const handleInputChange_UD = (event) => { 
    const { name, value } = event.target;
        setUserDetail((prev) => {
            return { ...prev, [name]: value };
        });
    }
    //update
    const updatecall=useUpdateAPI();
    const UpdateButton=async()=>{
        const useup={
            Id:user.UserId,
            Token:token,
            user:UserDetail
        };
        const res=await updatecall(useup);
        setMessage(res.Message);
        if(res.StatusCode===200){
            setshow(!show);
            setclassname("alert-success");
            // console.log(res);
        }else{
            setshow(!show);
            setclassname("alert-danger");
            // console.log(res);
        }
    };
    const closebtn=()=>{
        setshow(!show);
    }
  return (
    <div className="text-light mt-4 mx-2">
        <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="form-outline">
                        <InPut
                            label="First Name"
                            labelclass="ms-2 form-label"
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
                            labelclass="ms-2 form-label"
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
                        labelclass="ms-2 form-label"
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
                            labelclass="ms-2 form-label"
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
                            labelclass="ms-2 form-label"
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
                            label="Current Password"
                            labelclass="ms-2 form-label"
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
                            label="New Password"
                            labelclass="ms-2 form-label"
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
            <div className="d-flex justify-content-end">
                <div className="bg-dark w-auto rounded-2">
                    <button className="btn btn-outline-light px-3 w-100 btn-lg" onClick={UpdateButton}><BiEdit/>Update Profile</button>
                </div>
            </div>
            {show && 
            <div class={`alert d-flex justify-content-between w-25 position-absolute top-50 start-50 translate-middle ${classname}`} role="alert">
                {Message}
                <button type="button" class="btn-close" onClick={closebtn}></button>
            </div>
            }
    </div>
  );
}
