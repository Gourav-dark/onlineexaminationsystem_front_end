import { useParams } from "react-router-dom";
import QuestionItem from "./QuestionItem";
import { useState,useEffect } from "react";
import { useQuestionsBySid } from "../Config/QuestionAPI";
import { useContext } from "react";
import { AuthContext } from "../Config/AuthProvider";
import QuestionOption from "./QuestionOption";

const QuestionList = () => {
  const [Message, setMessage] = useState("");
  const { Sid } = useParams();
  const { token,user } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [Model, setModel] = useState(false);
  useEffect(() => {
    fun();
  }, [Model, Sid]);
  //Question List by EXam Id
  const callListApi=useQuestionsBySid();
  const fun = async () => {
    const data = {
      Sid, token
    }
    const res = await callListApi(data);
    if (res.StatusCode === 200) {
      setQuestions(res.Data);
    } else {
      setMessage(res.Message);
    }
  };
  const showAddmodel = () => {
    setModel(!Model);
   }
  return (
    <div className="bg-light mx-1 mt-1 rounded-2 p-1">
      <h6 className="mx-2 bg-dark text-light rounded-2 d-flex justify-content-between align-items-center">
        <span className="mx-2">Question List :</span>
        <button className="mx-2 my-1 btn btn-sm btn-primary" onClick={showAddmodel}>Add Question</button>
      </h6>
      {/* <QuestionItem
        item={Item}
      /> */}
        <ol>
      {
        Object.keys(questions).length !== 0 ?
          questions.map((item) =>
              <QuestionItem key={item.id} item={item} />
            )
            :
            <div className="alert alert-danger mx-3 py-1 " role="alert">
                {Message}
        </div>
      }
      </ol>
      {/* Hide Data */}
      <QuestionOption
        Sid={Sid}
        Eid={user.UserId}
        show={Model}
        handleClose={showAddmodel}
        btnName="Add Question"
      />
    </div>
  )
}

export default QuestionList;