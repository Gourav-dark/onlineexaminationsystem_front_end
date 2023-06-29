import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../Config/AuthProvider';
import { useFindUserApI } from "../../Config/UserAPI";
import { useFindInstituteApi } from "../../Config/InstituteAPI";
export default function Profile() {
  const { token,user } = useContext(AuthContext);
  const [showuser, setshowuser] = useState({});
  const [showinstitute, setShowinstitute] = useState({});
  const data={
        id:user.UserId,
        Token:token
      }
  const apiusercall = useFindUserApI();
  const apiinstitutecall=useFindInstituteApi();
  useEffect(() => {
    const func=async()=>{
      const res=await apiusercall(data);
      if(res.StatusCode===200){
        const inst = await apiinstitutecall(res.userdetail.instituteId);
        setshowuser(res.userdetail);
        if (inst.StatusCode === 200) {
          setShowinstitute(inst.instituteDetail);
          console.log(inst);
        } else {
          console.log(inst);
        }
      }
      else{
        console.log(res);
      }
    }
    if (Object.keys(showuser).length === 0 || Object.keys(showinstitute) === 0) {
      func();
    }
  }, [data]);
  const showdata = () => {
    console.log(showinstitute)
  }
  return (
    <div className="profile-container">
      <div className="row bg-light m-2 rounded-3">
          <h3 className="bg-dark text-light rounded-1 my-2 p-2 w-100">Profile Details</h3>
            <div className="col-5 ms-4">
              <h5>First Name</h5>
              <h5>Last Name</h5>
              <h5>Email</h5>
              <h5>Date of Birth</h5>
              <h5>Gender</h5>
              <h5>Phone Number</h5>
              <h5>Status</h5>
              <h5></h5>
            </div>
            <div className="col-1">
              <h5>:</h5>
              <h5>:</h5>
              <h5>:</h5>
              <h5>:</h5>
              <h5>:</h5>
              <h5>:</h5>
              <h5>:</h5>
            </div>
            <div className="col-5">
              <h5>{ showuser.fname}</h5>
              <h5>{ showuser.lname}</h5>
              <h5>{ showuser.email}</h5>
              <h5>{ showuser.dob}</h5>
              <h5>{ showuser.gender}</h5>
              <h5>{ showuser.phoneNumber}</h5>
              <h5>{ showuser.status ? "Active" : "Inactive"}</h5>
            </div>
      </div>
      <div className="row bg-light m-2 rounded-3 institute-info">
            <h3 className="bg-dark text-light rounded-1 my-2 p-2 w-100">Institute Information</h3>
          <div className="col-5">
            <h5>Institute Name</h5>
            <h5>Location</h5>
            <h5>City</h5>
            <h5>Postal Code</h5>
            <h5>State</h5>
            <h5>Country</h5>
          </div>
          <div className="col-1">
          <h5>:</h5>
          <h5>:</h5>
          <h5>:</h5>
          <h5>:</h5>
          <h5>:</h5>
          <h5>:</h5>
          </div>
          <div className="col-5">
            <h5>{showinstitute.instituteName}</h5>
            <h5>{showinstitute.location}</h5>
            <h5>{showinstitute.city}</h5>
            <h5>{showinstitute.postalCode}</h5>
            <h5>{showinstitute.state}</h5>
            <h5>{showinstitute.country}</h5>
        </div>
      </div>
    </div>
  );
}
