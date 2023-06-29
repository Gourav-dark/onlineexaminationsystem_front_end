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
          // console.log(inst.instituteDetail);
        } else {
          console.log(inst.Massage);
        }
      }
      else{
        console.log(res.Massage);
      }
    }
    if (Object.keys(showuser).length === 0 || Object.keys(showinstitute) === 0) {
      func();
    }
  });
  return (
    <div className="profile-container">
      <div className="row bg-light m-2 m-md-0 rounded-3 border border-dark">
          <h5 className="bg-dark text-light rounded-1 my-2 p-2 w-100">Profile Details</h5>
            <div className="col-3 ms-4">
              <h6>First Name</h6>
              <h6>Last Name</h6>
              <h6>Email</h6>
              <h6>Date of Birth</h6>
              <h6>Gender</h6>
              <h6>Phone Number</h6>
              <h6>Status</h6>
            </div>
            <div className="col-1">
              <h6>:</h6>
              <h6>:</h6>
              <h6>:</h6>
              <h6>:</h6>
              <h6>:</h6>
              <h6>:</h6>
              <h6>:</h6>
            </div>
            <div className="col-7">
              <h6>{ showuser.fname}</h6>
              <h6>{ showuser.lname}</h6>
              <h6>{ showuser.email}</h6>
              <h6>{ showuser.dob}</h6>
              <h6>{ showuser.gender}</h6>
              <h6>{ showuser.phoneNumber}</h6>
              <h6>{ showuser.status ? "Active" : "Inactive"}</h6>
            </div>
      </div>
      <div className="row bg-light m-2 m-md-0 rounded-3 institute-info border border-dark">
            <h5 className="bg-dark text-light rounded-1 my-2 p-2 w-100">Institute Information</h5>
          <div className="col-3 ms-4">
            <h6>Institute Name</h6>
            <h6>Location</h6>
            <h6>City</h6>
            <h6>Postal Code</h6>
            <h6>State</h6>
            <h6>Country</h6>
          </div>
          <div className="col-1">
          <h6>:</h6>
          <h6>:</h6>
          <h6>:</h6>
          <h6>:</h6>
          <h6>:</h6>
          <h6>:</h6>
          </div>
          <div className="col-7">
            <h6>{showinstitute.instituteName}</h6>
            <h6>{showinstitute.location}</h6>
            <h6>{showinstitute.city}</h6>
            <h6>{showinstitute.postalCode}</h6>
            <h6>{showinstitute.state}</h6>
            <h6>{showinstitute.country}</h6>
        </div>
      </div>
    </div>
  );
}
