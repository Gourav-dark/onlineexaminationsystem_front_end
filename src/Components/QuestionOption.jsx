import { useContext, useState } from "react";
import InPut from "./InPut";
import { AuthContext } from "../Config/AuthProvider";
import { useAddQuestionApi } from "../Config/QuestionAPI";

const QuestionOption = ({ Eid, Sid, btnName, handleClose, show }) => {
    const { token } = useContext(AuthContext);
    const [Question, setQuestion] = useState({
          questionSet: 1,
          questionTitle: "",
          option_A: "",
          option_B: "",
          option_C: "",
          option_D: "",
          correctOption: "A",
          mark: 0
      });  
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQuestion({...Question, [name]: value });
      }
    const addApicall=useAddQuestionApi();
    const handleSubmit = async () => {
      if (Eid !== undefined) {
        const data = {
          Sid, Eid, token, Question
        };
        const res = await addApicall(data);
        if (res.StatusCode===200) {
          setQuestion({
            questionTitle: "",
            option_A: "",
            option_B: "",
            option_C: "",
            option_D: ""
          })
          handleClose();
        } else {
          console.log(res);
        }
      } else {
        // Update Code
      }
    }
    return (
    <div
      className={`modal ${show ? "d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog border-light" role="document" style={{marginTop:"3rem"}}>
        <div className="modal-content">
          <div className="modal-header bg-dark text-light">
            <h5 className="modal-title">Subject</h5>
            <button
              type="button"
              className="btn-close bg-light"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <InPut
              label="Question"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "text",
                  name: "questionTitle",
                  className: "form-control",
                  placeholder: "Full Question",
                  onChange: handleInputChange,
                  value: Question.questionTitle
              }}/>
            <InPut
              label="Option A"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "text",
                  name: "option_A",
                  className: "form-control",
                  placeholder: "",
                  onChange: handleInputChange,
                  value: Question.option_A
              }}/>
            <InPut
              label="Option B"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "text",
                  name: "option_B",
                  className: "form-control",
                  placeholder: "",
                  onChange: handleInputChange,
                  value: Question.option_B
              }}/>
            <InPut
              label="Option C"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "text",
                  name: "option_C",
                  className: "form-control",
                  placeholder: "",
                  onChange: handleInputChange,
                  value: Question.option_C
              }}/>
            <InPut
              label="Option D"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "text",
                  name: "option_D",
                  className: "form-control",
                  placeholder: "",
                  onChange: handleInputChange,
                  value: Question.option_D
                }} />
            <InPut
              label="Correct Answer Option"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "text",
                  name: "correctOption",
                  className: "form-control",
                  placeholder: "option",
                  onChange: handleInputChange,
                  value: Question.correctOption
                }} />
            <InPut
              label="Marks"
              labelclass="form-label ms-1 font-for-input"
              input={{
                  type: "number",
                  name: "mark",
                  className: "form-control",
                  placeholder: "mark",
                  onChange: handleInputChange,
                  value: Question.mark
                }} />
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
  )
}

export default QuestionOption;
