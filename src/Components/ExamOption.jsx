import { useContext,useState } from "react";
import InPut from "./InPut";
import { AuthContext } from "../Config/AuthProvider";
import { useAddExamBySid } from "../Config/ExamAPI";


const ExamOption = ({ show, handleClose, btnName, Sid, Exid }) => {
    const { token } = useContext(AuthContext);
    const [ExamDetail, setExamDetail] = useState({
        "examName": "Sem-2",
        "date": "2023-12-08",
        "time": "13:30",
        "duration": 20,
        "noOfQuestion": 20,
        "totalMark": 40
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExamDetail({...ExamDetail, [name]: value });
    }
    const callAddApi= useAddExamBySid();    
    const handleSubmit = async () => {
        if (Sid !== undefined) {
            const data = {
                ExamDetail,Sid,token
            }
            const res = await callAddApi(data);
            if (res.StatusCode === 200) {
                handleClose();
            }
        }else {
        // Update Code
        }
    }
    return (
    <div className={`modal ${show ? "d-block" : ""}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog border-light" role="document" style={{marginTop:"4rem"}}>
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
              label="Exam Name :"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "text",
                  name: "examName",
                  className: "form-control",
                  placeholder: "Exam Name",
                  onChange: handleInputChange,
                  value: ExamDetail.examName
              }}/>
            <InPut
              label="Exam Date :"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "date",
                  name: "date",
                  className: "form-control",
                //   placeholder: "Exam Data",
                  onChange: handleInputChange,
                  value: ExamDetail.date
              }}/>
            <InPut
              label="Exam Start Time :"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "time",
                  name: "time",
                  className: "form-control",
                //   placeholder: "Exam Name",
                  onChange: handleInputChange,
                  value: ExamDetail.time
              }}/>
            <InPut
              label="Exam Duration :"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "number",
                  name: "duration",
                  className: "form-control",
                  placeholder: "Duration",
                  onChange: handleInputChange,
                  value: ExamDetail.duration
              }}/>
            <InPut
              label="Number Of Questions :"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "number",
                  name: "noOfQuestion",
                  className: "form-control",
                  placeholder: "Number Of Question",
                  onChange: handleInputChange,
                  value: ExamDetail.noOfQuestion
              }}/>
            <InPut
              label="Total Makes :"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "number",
                  name: "totalMark",
                  className: "form-control",
                  placeholder: "Total Marks",
                  onChange: handleInputChange,
                  value: ExamDetail.totalMark
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
export default ExamOption;
