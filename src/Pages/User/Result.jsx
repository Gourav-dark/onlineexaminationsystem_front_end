import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Loader from "../../Components/Loader";
import { AuthContext } from "../../Config/AuthProvider";

const Result = () => {
  const {token,user}=useContext(AuthContext);
  const [Loading,setLoading]=useState(false);
  const [ResultList,setResultList]=useState([]);
  //
  useEffect(()=>{
    if(user.Role==="Admin"){
      AdmResult();
    }
    else if(user.Role==="InstituteUser"){
      InsResult();
    }
    else if(user.Role==="Admin"){
      StuResult();
    }
  },[]);
  //result for Institute
  const InsResult=()=>{

  }
  //result for Student 
  const StuResult=()=>{
    
  }
  //result for Admin
  const AdmResult=()=>{
    
  }
  return (
    <div className="mt-2 mx-2">
      <div className="row bg-white p-2 rounded-2">
        Result Details:
      </div>
      <div className="row mt-2 text-white bg-dark rounded-top-2 py-1 border-2 border-bottom">
        <div className="col-3 d-flex justify-content-center align-items-center">Exam Name</div>
        <div className="col-3 d-flex justify-content-center align-items-center">Student Name</div>
        <div className="col-2 d-flex justify-content-center align-items-center">Total Marks</div>
        <div className="col-1 d-flex justify-content-center align-items-center">Obtained</div>
        <div className="col-1 d-flex justify-content-center align-items-center">%</div>
        <div className="col-2 d-flex justify-content-center align-items-center">Grade</div>
      </div>
      {Loading && <Loader/>}
    </div>
  )
}
export default Result;
