import { useState, useContext } from 'react';
import { useaddCourseApi } from '../Config/CourseAPI';
import InPut from "./InPut";
import { AuthContext } from '../Config/AuthProvider';

export const CourseOption = ({ show, handleClose, btnName, Cid, Iid }) => {
  const { token } = useContext(AuthContext);
  const [Course, setCourse] = useState({
      courseName: "",
      departmentName: ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({...Course, [name]: value });
  }
  const addapicall = useaddCourseApi();
  const handleSubmit = async () => {
    if (Cid === "") {
      const data = {
        Course,
        Iid,
        token
      }
      const res = await addapicall(data);
      if (res.StatusCode === 200) { 
        handleClose();
      }
    } else {
      //update course code
    }
  }
  return (
    <div
      className={`modal ${show ? "d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog border-light" role="document" style={{marginTop:"7rem"}}>
        <div className="modal-content">
          <div className="modal-header bg-dark text-light">
            <h5 className="modal-title">Course</h5>
            <button
              type="button"
              className="btn-close bg-light"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <InPut
              label="Course Name"
              labelclass="form-label"
              input={{
                  type: "text",
                  name: "courseName",
                  className: "form-control",
                  placeholder: "Course Name",
                  onChange: handleInputChange,
                  value: Course.courseName
              }}/>
            <InPut
              label="Department Name"
              labelclass="form-label"
              input={{
                  type: "text",
                  name: "departmentName",
                  className: "form-control",
                  placeholder: "Department Name",
                  onChange: handleInputChange,
                  value: Course.departmentName
              }}/>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              {btnName}
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};
