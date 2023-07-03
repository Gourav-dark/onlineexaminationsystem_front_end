import { useState,useEffect,useContext } from "react";
import { useDeleteCourseApi, useICourseListApi } from "../../Config/CourseAPI";
import { useParams } from "react-router-dom";

import {AiOutlinePlusCircle} from "react-icons/ai";
import { CourseOption } from "../../Components/CourseOption";
import { CourseItem } from "../../Components/CourseItem";
import { AuthContext } from "../../Config/AuthProvider";

const Course = () => {
  const { Iid } = useParams();
  const { token } = useContext(AuthContext);
  //Message
  const [classname,setclassname]=useState("");
  const [show,setshow]=useState(false);
  const [Message, setMessage] = useState("");
  // Show  Model
  const [showModal, setShowModal] = useState(false);
  const [courseList, setcouserList] = useState([]);
  const callIcourse = useICourseListApi();
  useEffect(() => {
      fun();
  }, [showModal]);
  const fun = async () => {
    const res = await callIcourse(Iid);
    if (res.StatusCode === 200) {
      setcouserList(res.courseList);
      // console.log(res);
    } else {
      setMessage(res.Message);
      setclassname("alert-danger");
      console.log(res);
      setshow(!show);
    }
  }
  const closebtn = () => {
    setshow(!show);
  };
  const IsCourseModel = () => {
    setShowModal(!showModal);
  };

  //Delete Course Detail
  const callDelteApi=useDeleteCourseApi();
  const handleDelete = async (Cid) => {
    const data = {
      Cid,token
    }
    const res = await callDelteApi(data); {
      if (res.StatusCode === 200) {
        setMessage(res.Message);
        setclassname("alert-success");
        setshow(!show);
        fun();
      } else {
        setMessage(res.Message);
        setclassname("alert-danger");
        setshow(!show);
        console.log(res.Message);
      }
    }
  }
  return (
    <div className="Course">
      <div className="mt-1 mx-2 bg-dark text-light d-flex align-items-center justify-content-between rounded-3">
        <h5 className="my-auto mx-2">Institute Courses List :</h5>
        <button className="btn btn-primary btn-sm m-1" onClick={IsCourseModel}><span className="me-1"><AiOutlinePlusCircle style={{height:"1.25rem",width:"1.25rem"}}/></span>Add Course</button>
      </div>
      <div className="courseListclass">
        <div className="row bg-light mt-2 mx-2 rounded-top-2 py-1 border-bottom border-dark border-3">
          <div className="col-3">Course Name</div>
          <div className="col-3">Department</div>
          <div className="col-6 d-flex justify-content-center">More Options</div>
        </div>
            {courseList.map((item) => <CourseItem key={item.id} item={item} handleDelete={handleDelete} />)}
      </div>
      {/* Not Diplsay Contant */}
      <CourseOption
        show={showModal}
        handleClose={IsCourseModel}
        btnName="Add Course"
        Iid={Iid}
      />
      {show && 
          <div className={`alert d-flex justify-content-between position-absolute top-50 start-50 translate-middle ${classname}`} role="alert">
              {Message}
              <button type="button" className="btn-close" onClick={closebtn}></button>
          </div>
          }
    </div>
  );
}
export default Course;