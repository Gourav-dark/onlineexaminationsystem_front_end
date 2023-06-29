import { useState,useContext } from "react";
import InPut from "../../Components/InPut";
import { AuthContext } from '../../Config/AuthProvider';
import { BiEdit } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFindInstituteApi } from "../../Config/InstituteAPI";
const InstituteUpdate = () => {
    const { Iid } = useParams();
    //Message shower
    const [classname,setclassname]=useState("");
    const [show,setshow]=useState(false);
    const [Message, setMessage] = useState("");

    const { token } = useContext(AuthContext);
    
    const [InstituteDetail, setInstituteDetail] = useState({
        instituteName: "",
        location: "",
        city: "",
        postalCode: "",
        state: "",
        country: ""
    });
    const callFindapi = useFindInstituteApi();
    useEffect(()=>{
        const fun=async()=>{
            const res=await callFindapi(Iid);
            if (res.StatusCode === 200) {
                setInstituteDetail((InstituteDetail) => ({
                    ...InstituteDetail,
                    ...res.instituteDetail  
                }));
            }
            else{
                console.log(res.Message);
            }
        }
        // if(Object.keys(InstituteDetail).length === 0) {
        if(InstituteDetail.instituteName==="") {
           fun();
        }
    });
    const handleInputChange_ID = (event) => { 
        const { name, value } = event.target;
        // console.log(name+" "+value);
        setInstituteDetail((prev) => {
            return { ...prev, [name]: value };
        });
    }
    const UpdateButton = async () => {
        console.log(InstituteDetail);
    }
    const closebtn=()=>{
        setshow(!show);
    }
    return (
        <div className="InstituteUpdate text-light">
            <h5 className="bg-dark rounded-3 my-2 p-2 w-100">Update Institute Details</h5>
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
            <div className="mt-0 mb-3 d-flex justify-content-end w-100">
                <div className="bg-dark rounded-2 mt-0">
                    <button className="btn btn-outline-light px-3 w-100" onClick={UpdateButton}><BiEdit/>Update Profile</button>
                </div>
            </div>
            {show && 
            <div className={`alert d-flex justify-content-between w-25 position-absolute top-50 start-50 translate-middle ${classname}`} role="alert">
                {Message}
                <button type="button" className="btn-close" onClick={closebtn}></button>
            </div>
            }
        </div>
    );
}
export default InstituteUpdate