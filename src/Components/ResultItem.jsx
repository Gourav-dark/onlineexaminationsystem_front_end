import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Config/AuthProvider";
import { useFindExam } from "../Config/ExamAPI";
import { useFindUserId } from "../Config/UserAPI";
const ResultItem = ({ item }) => {
  const {token} =useContext(AuthContext);
  const [Name,setName]=useState("");
  const [Exam,setExam]=useState("");
  
  useEffect(()=>{
    userFindApiCall();
    userExamApiCall();
  },[])
  //Exam Find By Id'
  const callexamfindApi=useFindExam();
  const userExamApiCall=async()=>{
    const data={
      Exid:item.examId,
      token
    }
    const res=await callexamfindApi(data);
    if(res.StatusCode===200){
      setExam(res.Data.examName);
      // console.log(res);
    }
  }
  //Find user
  const callFinduser=useFindUserId();
  const userFindApiCall=async()=>{
    const data={
      userId:item.studentId,
      token
    }
    const res=await callFinduser(data);
    if(res.StatusCode===200){
      setName(res.Data.fname+" "+res.Data.lname);
      // console.log(res);
    }
  }
  return (
    <div className="row bg-secondary py-1 border border-1 border-top-0 border-white text-info">
      <div className="col-3 d-flex justify-content-center align-items-center">{Exam}</div>
      <div className="col-3 d-flex justify-content-center align-items-center">{Name}</div>
      <div className="col-2 d-flex justify-content-center align-items-center">{item.totalMarks}</div>
      <div className="col-1 d-flex justify-content-center align-items-center">{item.marksObtained}</div>
      <div className="col-1 d-flex justify-content-center align-items-center">{item.obtainedPercentage}</div>
      <div className="col-2 d-flex justify-content-center align-items-center">{item.gradeObtained}</div>
    </div>
  );
};

export default ResultItem;
