import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Config/AuthProvider";
import { useFindExam } from "../../Config/ExamAPI";
import { useQuestionsBySid } from "../../Config/QuestionAPI";
import Loader from "../../Components/Loader";
import Timer from "../../Components/Timer";

const ExamPage = () => {
  const { Exid } = useParams();
  const { token, user } = useContext(AuthContext);
  const [ExamDetail, setExamDetail] = useState({});
  const [QuestionList, setQuestions] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    getExamFun();
  }, []);

  // Question list By Subject Id
  const callListApi = useQuestionsBySid();
  const questionFunction = async (Sid) => {
    const data = {
      Sid,
      token,
    };
    const res = await callListApi(data);
    if (res.StatusCode === 200) {
      setQuestions(res.Data);
      console.log(res);
    } else {
      // Handle error case
      console.log(res);
    }
  };

  // Exam Details
  const callFindApi = useFindExam();
  const getExamFun = async () => {
    setLoading(true);
    const data = {
      token,
      Exid,
    };
    const res = await callFindApi(data);
    if (res.StatusCode === 200) {
      setExamDetail(res.Data);
      questionFunction(res.Data.subjectId);
      console.log(res);
    } else {
      console.log(res.Message);
    }
    setLoading(false);
  };
  // const targetTime = new Date("2023-07-05T23:00:00"); 
  const targetTime = new Date(`${ExamDetail.date} ${ExamDetail.time}`);
  return (
    <div className="ExamPage mt-2">
      <div className="mt-1 p-2 bg-dark text-light mx-2 rounded-3 d-flex justify-content-between">
        <div className="">Exam Name: {ExamDetail.examName}</div>
        <div className="">
          <Timer targetTime={targetTime} />
        </div>
      </div>
      <div className="Questioncontainer mx-2 mt-2">
        <ol type="1" className="bg-light border border-1 border-dark rounded-2 py-2">
        {
          QuestionList.map((ques) => {
            return (
              <li className="Question my-1">
                {ques.questionTitle}
                <div class="form-check">
                  <input className="form-check-input" type="radio" name={ques.id} value="A"/>
                  <label className="form-check-label">
                    {ques.option_A}
                  </label>
                </div>
                <div class="form-check">
                  <input className="form-check-input" type="radio" name={ques.id} value="B"/>
                  <label className="form-check-label">
                    {ques.option_B}
                  </label>
                </div>
                <div class="form-check">
                  <input className="form-check-input" type="radio" name={ques.id} value="A"/>
                  <label className="form-check-label">
                    {ques.option_C}
                  </label>
                </div>
                <div class="form-check">
                  <input className="form-check-input" type="radio" name={ques.id} value="A"/>
                  <label className="form-check-label">
                    {ques.option_D}
                  </label>
                </div>
              </li>);
          })
        }
        </ol>
      </div>
      {Loading && <Loader />}
    </div>
  );
};

export default ExamPage;
