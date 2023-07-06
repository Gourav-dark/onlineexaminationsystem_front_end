import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Loader from "../../Components/Loader";
import { AuthContext } from "../../Config/AuthProvider";
import { useAllResultsApi, useResultsUserIdApi } from "../../Config/ResultAPI";
import ResultItem from "../../Components/ResultItem";
import { useParams } from "react-router-dom";
const Result = () => {
  const { userId } = useParams();
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
    else if(user.Role==="Student"){
      StuResult();
    }
  },[]);
  //result for Institute
  const InsResult=()=>{
    
  }
  //result for Student 
  const callApiByuserId = useResultsUserIdApi();
  const StuResult=async()=>{
    setLoading(true);
    const data = {
      token,userId
    }
    const res = await callApiByuserId(data);
    if (res.StatusCode === 200) {
      setResultList(res.Data);
      // console.log(res.Data);
    } else {
      console.log(res);
    }
    setLoading(false);
  }
  //result for Admin
  const AdminResult = useAllResultsApi();
  const AdmResult = async () => {
    setLoading(true);
    const data = {
      token
    }
    const res = await AdminResult(data);
    if (res.StatusCode === 200) {
      setResultList(res.Data);
      // console.log(res.Data);
    } else {
      console.log(res);
    }
    setLoading(false);
  }
  return (
    <div className="mt-2 mx-2">
      <div className="row bg-white p-2 rounded-2">
        Result Details:
      </div>
      <div className="row mt-2 text-white bg-dark rounded-top-2 py-1 border-2 border-bottom">
        <div className="col-3 d-flex justify-content-center align-items-center">Exam Id</div>
        <div className="col-3 d-flex justify-content-center align-items-center">Student Name</div>
        <div className="col-2 d-flex justify-content-center align-items-center">Total Marks</div>
        <div className="col-1 d-flex justify-content-center align-items-center">Obtained</div>
        <div className="col-1 d-flex justify-content-center align-items-center">%</div>
        <div className="col-2 d-flex justify-content-center align-items-center">Grade</div>
      </div>
      {
        Object.keys(ResultList).length !== 0 ?
        (ResultList.map((item) => (
          <ResultItem item={item} key={item.id} />
        ))):(
          <div className="alert alert-danger mx-0 mt-1 py-1 ">
            No Result Available
          </div>
        )
      }
      {Loading && <Loader/>}
    </div>
  )
}
export default Result;
