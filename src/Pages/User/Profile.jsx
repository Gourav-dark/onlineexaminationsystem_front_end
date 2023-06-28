import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../Config/AuthProvider';
import { useFindUserApI } from "../../Config/UserAPI";
export default function Profile() {
  const { user,token } = useContext(AuthContext);
  const [showuser,setshowuser]=useState({});
  const apicall=useFindUserApI()
  useEffect(()=>{
    const func=async()=>{
      const data={
        id:user.Id,
        Token:token
      }
      const res=await apicall(data);
      if(res.StatusCode===200){
        setshowuser(res.userdetail);
        console.log(showuser);
        console.log(res);
      }
      else{
        console.log(res);
      }
    }
    func();
  },[]);
  return (
    <div className="profile">
        <div className="row">
          {/* <div className="col-4 border border-danger">

          </div> */}
          <div className="col border border-info">
            
          </div>
        </div>
    </div>
  );
}
