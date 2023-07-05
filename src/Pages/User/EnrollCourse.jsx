import { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import { useFindCourseApi, useICourseListApi } from "../../Config/CourseAPI";
import EnrollCourseItem from "../../Components/EnrollCourseItem";
import { AuthContext } from "../../Config/AuthProvider";
import { useCourseIdByStudentId, useEnrollCourse } from "../../Config/EnrollCourseAPI";
import SubjectList from "../../Components/SubjectList";
const EnrollCourse = () => {
  const {Iid,userId}=useParams();
  const {token}=useContext(AuthContext);
  const [IsEnroll,setIsEnroll]=useState(false);
  const [Loading,setLoading]=useState(false);
  const [courseList, setcouserList] = useState([]);
  const [CourseId,setCourseId]=useState("");

  const callIcourse = useICourseListApi();
  useEffect(() => {
    if(!IsEnroll){
      checkEnroll();
    }else{
      courseDetail();
    }
  }, []);
  const CourselistforEnroll = async () => {
    setLoading(true);
    const res = await callIcourse(Iid);
    if (res.StatusCode === 200) {
      setcouserList(res.courseList);
      // console.log(res);
    } else {
      console.log(res);
    }
    setLoading(false);
  }
  // check user enroll or not
  const callCidByUserId=useCourseIdByStudentId();
  const checkEnroll=async()=>{
    setLoading(true);
    const data={
      token,userId
    }
    const res=await callCidByUserId(data);
    if(res.StatusCode===200){
      setCourseId(res.Data);
      // console.log(res.Data);
      setIsEnroll(true);
    }else{
      CourselistforEnroll();
      console.log(res);
    }
    setLoading(false);
  }
  //Enroll Course
  const callenrollcourse=useEnrollCourse();
  const handleEnrollCourse=async(Cid)=>{
    setLoading(true);
    const data={
      token,
      enrolldata:{
        courseId: Cid,
        studentId: userId,
      }
    }
    const res=await callenrollcourse(data);
    if(res.StatusCode===200){
      console.log(res.Message)
      setIsEnroll(true);
    }else{
      setIsEnroll(false);
    }
    setLoading(false);
  }
  //Course Detail
  const findcourseApi=useFindCourseApi();
  const courseDetail=async()=>{
    const data={
      token,Cid:CourseId
    }
    const res=await findcourseApi(data);
    if(res.StatusCode===200){
      console.log(res.Data);
    }else{
      console.log(res.Message);
    }
  }
  return (
    <div className="EnrollCourse">
      {!IsEnroll ?
        (<div className="enroll">
          <div className="row mt-2 mx-2 bg-dark text-white pt-2 rounded-top-2 border-bottom border-2 d-flex align-items-center">
            <div className="col-4 d-flex justify-content-center">Course Name</div>
            <div className="col-4 d-flex justify-content-center">Department Name</div>
            <div className="col-4 d-flex justify-content-center">Enroll Course</div>
          </div>
          {courseList.map((item) => <EnrollCourseItem key={item.id} item={item} handleEnrollCourse={handleEnrollCourse} />)}
        </div>)
        :
        (
          <div className="mt-2">
            <div className="row bg-dark text-white mx-2 p-2 rounded-2">
              Course Details
            </div>
            <SubjectList Cid={CourseId} />
          </div>
        )
      }
      {Loading && <Loader/>}
    </div>
  )
}

export default EnrollCourse;
