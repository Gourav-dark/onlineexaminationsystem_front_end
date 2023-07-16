import { useContext, useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { AuthContext } from "../../Config/AuthProvider";
import { useFindExam } from "../../Config/ExamAPI";
import { useQuestionsBySid } from "../../Config/QuestionAPI";
import Loader from "../../Components/Loader";
import Timer from "../../Components/Timer";
import { useGenerateResultsApi } from "../../Config/ResultAPI";

const ExamPage = () => {
  const Navigate=useNavigate();
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
  const targetTime = new Date(`${ExamDetail.date} ${ExamDetail.time}`);
  // Genrate Result 
  const callapiforresult=useGenerateResultsApi();
  const ResultGenerate = async() => {
    const data = {
      userId: user.UserId,
      Exid,
      token,
      Data:QuestionList
    }
    const res = await callapiforresult(data);
    if (res.StatusCode === 200) {
      console.log(res);
      Navigate(`/profile/result/${user.UserId}`);

    } else {
      console.log(res);
    }
  }
  const SelectOption = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setQuestions((QuestionList) => {
      const newList = [...QuestionList];
      newList[name].correctOption = value;
      return newList;
    });
    // console.log(QuestionList[name]);
  }
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
          QuestionList.map((ques,index) => {
            return (
              <li className="Question my-1">
                {ques.questionTitle}
                <div class="form-check">
                  <input className="form-check-input" type="radio" name={index} value="A" onChange={SelectOption}/>
                  <label className="form-check-label">
                    {ques.option_A}
                  </label>
                </div>
                <div class="form-check">
                  <input className="form-check-input" type="radio" name={index} value="B" onChange={SelectOption}/>
                  <label className="form-check-label">
                    {ques.option_B}
                  </label>
                </div>
                <div class="form-check">
                  <input className="form-check-input" type="radio" name={index} value="C" onChange={SelectOption}/>
                  <label className="form-check-label">
                    {ques.option_C}
                  </label>
                </div>
                <div class="form-check">
                  <input className="form-check-input" type="radio" name={index} value="D" onChange={SelectOption}/>
                  <label className="form-check-label">
                    {ques.option_D}
                  </label>
                </div>
              </li>);
          })
        }
        </ol>
      <div className="d-flex justify-content-end">
        <button className="btn btn-success btn-lg py-1" onClick={ResultGenerate}>Submit</button>
      </div>
      </div>
      {Loading && <Loader />}
    </div>
  );
};

export default ExamPage;
