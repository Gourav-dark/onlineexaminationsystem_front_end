import { useState,useContext,useEffect } from "react";
import InPut from "./InPut";
import { useAddSubjectbyCourseId, useFindSubject, useUpdateSubjectApi } from "../Config/SubjectAPI";
import { AuthContext } from "../Config/AuthProvider";
const SubjectOption = ({ show, handleClose, btnName, Cid, Sid }) => {
  const { token } = useContext(AuthContext);
    const [Subject, setSubject] = useState({
      subjectCode: "",
      subjectName: ""
    });
    const ApiCallFind=useFindSubject();
    useEffect(() => {
      if (Sid !== undefined) {
        // console.log(Sid);
        fun();
      }
    },[Sid,show]);
    const fun = async () => {
        const data = {
        Sid,
        token
      }
      const res = await ApiCallFind(data);
      if (res.StatusCode === 200) {
        setSubject(Subject => ({
          ...Subject,
          ...res.Data
        }));
      }
    };
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setSubject({...Subject, [name]: value });
    }
    const calladdAPi = useAddSubjectbyCourseId();
    const callupdateApi=useUpdateSubjectApi();
    const handleSubmit = async() => {
        // Add Subject
        if (Cid !== "") {
          const data = {
            Subject,
            Cid,
            token
          }
          const res = await calladdAPi(data);
          if (res.StatusCode === 200) {
            // console.log(res);
            handleClose();
          }
        }else {
            //Update Subject
          const data = {
            Sid,
            Subject,
            token
          }
          const res = await callupdateApi(data);
          if (res.StatusCode === 200) {
            // console.log(res);
            handleClose();
          }
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
            <h5 className="modal-title">Subject Details</h5>
            <button
              type="button"
              className="btn-close bg-light"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <InPut
              label="Subject Name"
              labelclass="form-label"
              input={{
                  type: "text",
                  name: "subjectName",
                  className: "form-control",
                  placeholder: "Subject Name",
                  onChange: handleInputChange,
                  value: Subject.subjectName
              }}/>
            <InPut
              label="Subject Code"
              labelclass="form-label"
              input={{
                  type: "text",
                  name: "subjectCode",
                  className: "form-control",
                  placeholder: "Subject Code",
                  onChange: handleInputChange,
                  value: Subject.subjectCode
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
}
export default SubjectOption;
