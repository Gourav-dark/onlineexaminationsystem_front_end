import { useParams } from "react-router-dom";
import ExamItem from "./ExamItem";
import { useContext,useEffect,useState } from "react";
import { useExamListBySid,useDeleteExam } from "../Config/ExamAPI";
import { AuthContext } from "../Config/AuthProvider";
import ExamOption from "./ExamOption";

const ExamList = () => {
  const { token } = useContext(AuthContext);
  const { Sid } = useParams();
  const [showExamsList, setshowExamsList] = useState([]);
  const [Message, setMessage] = useState("");
  const [showModel,setshowModel]=useState(false);
  const callApiList = useExamListBySid();
  useEffect(() => {
    fun();
  }, [Sid,showExamsList,showModel]);
  const fun = async () => {
    const data = {
      Sid, token
    }
    const res = await callApiList(data);
    if (res.StatusCode === 200) {
      setshowExamsList(res.Data);
    } else {
      setMessage(res.Message);
    }
  }
  const showAddModel = () => {
    setshowModel(!showModel);
  }
  // Delete Exam from List
  const callDelteApi=useDeleteExam();
  const handleDelete=async(Exid)=>{
    const data={
      Exid,token
    }
    const res=await callDelteApi(data);
    if(res.StatusCode===200){
      console.log(res.Message);
      fun();
    }else{
      console.log(res);
    }
  }
  return (
    <div className="ExamDetail bg-light rounded-2 mt-1 py-1 mx-1">
        <div className="bg-dark mx-1 my-1 rounded-2 text-light d-flex justify-content-between align-items-center">
            <span className="ms-2 p-1">Exam Details : </span>
            <button className="btn btn-primary btn-sm me-2 my-1" onClick={showAddModel}>Add Exam</button>
        </div>
        <div className="row mx-2 mt-1 bg-secondary rounded-top-2 text-white border-bottom border-dark border-2">
            <div className="col-2">Exam Name</div>
            <div className="col-2">Date</div>
            <div className="col-1">Time</div>
            <div className="col-2">Duration (min)</div>
            <div className="col-2">No. of Ques</div>
            <div className="col-1">Marks</div>
            <div className="col-2 d-flex justify-content-center">Options</div>
      </div>
      {
        Object.keys(showExamsList).length !== 0 ?
            showExamsList.map((item) =>
              <ExamItem key={item.id} item={item} handleDelete={handleDelete} />)
        :
        <div className="alert alert-danger mt-1 mx-2 py-0" role="alert">
                {Message}
        </div>
      }
      {/* Hide File Like Models */}
      <ExamOption
        show={showModel}
        handleClose={showAddModel}
        btnName="Add Exam"
        Sid={Sid}
      />
    </div>
  )
}

export default ExamList;
