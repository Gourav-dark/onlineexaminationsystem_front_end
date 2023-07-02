import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../Config/AuthProvider';
import { useFindUserApI } from "../../Config/UserAPI";
import { useFindInstituteApi } from "../../Config/InstituteAPI";

// this for Loader
import Loader from "../../Components/Loader";
//above
export default function Profile() {
  const { token, user } = useContext(AuthContext);
  const [showuser, setshowuser] = useState({});
  const [showinstitute, setShowinstitute] = useState({});
  const data = {
    id: user.UserId,
    Token: token
  }
  const apiusercall = useFindUserApI();
  const apiinstitutecall = useFindInstituteApi();
  useEffect(() => {
    if (Object.keys(showuser).length === 0 || Object.keys(showinstitute) === 0) {
      func();
    }
  });
  const func = async () => {
    const res = await apiusercall(data);
    if (res.StatusCode === 200) {
      const inst = await apiinstitutecall(res.userdetail.instituteId);
      setshowuser(res.userdetail);
      if (inst.StatusCode === 200) {
        setShowinstitute(inst.instituteDetail);
        // console.log(inst.instituteDetail);
      } else {
        console.log(inst.Message);
      }
    }
    else {
      console.log(res.Message);
    }
  }
  return (
    <>
      {Object.keys(showuser).length === 0 || Object.keys(showinstitute).length === 0 ? (
        <Loader />
      ) : (
        <div className="profile mt-2">
          <div className="profile-container mx-2 bg-light p-3 rounded-2">
            <h5 className="bg-dark text-light py-2 ps-2 rounded-2">Profile Details</h5>
            <div className="row mx-1">
              <div className="col-5">First Name</div>
              <div className="col-1">:</div>
              <div className="col-5">{showuser.fname}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Last Name</div>
              <div className="col-1">:</div>
              <div className="col-5">{showuser.lname}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Date of Birth</div>
              <div className="col-1">:</div>
              <div className="col-5">{showuser.dob}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Gender</div>
              <div className="col-1">:</div>
              <div className="col-5">{showuser.gender}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Email</div>
              <div className="col-1">:</div>
              <div className="col-5">{showuser.email}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Phone Number</div>
              <div className="col-1">:</div>
              <div className="col-5">{showuser.phoneNumber}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Status</div>
              <div className="col-1">:</div>
              <div className="col-5">{showuser.status ? "Active" : "Inactive"}</div>
            </div>
          </div>
          <div className="Institute-container mt-2 mx-2 bg-light p-3 rounded-2">
            <h5 className="bg-dark text-light py-2 ps-2 rounded-2">Institute Details</h5>
            <div className="row mx-1">
              <div className="col-5">Institute Name</div>
              <div className="col-1">:</div>
              <div className="col-5">{showinstitute.instituteName}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Location</div>
              <div className="col-1">:</div>
              <div className="col-5">{showinstitute.location}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">City</div>
              <div className="col-1">:</div>
              <div className="col-5">{showinstitute.city}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Postal Code</div>
              <div className="col-1">:</div>
              <div className="col-5">{showinstitute.postalCode}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">State</div>
              <div className="col-1">:</div>
              <div className="col-5">{showinstitute.state}</div>
            </div>
            <div className="row mx-1">
              <div className="col-5">Country</div>
              <div className="col-1">:</div>
              <div className="col-5">{showinstitute.country}</div>
            </div>
          </div>
        </div >
      )}
  </>
  );
}
