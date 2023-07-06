import { useState } from "react";
import SubjectOption from "./SubjectOption";
import { useNavigate } from "react-router-dom";
import ExamList from "./ExamList";
const SubjectItem = ({ item,handleDelete,role}) => {
  const Navigate = useNavigate();
  const [showModel, setshowModel] = useState(false);
  const [showExam, setshowExam] = useState(false);
  const handleEdit = () => {
    setshowModel(!showModel);
  }
  const showExamList=()=>{
    setshowExam(!showExam);
  }
  return (
    <div className="row mx-2 bg-secondary border border-light border-1 border-top-0 text-info">
        <div className="col-3 ms-1 mt-1">
          {item.subjectName}
        </div>
        <div className="col-3 mt-1">{item.subjectCode}</div>
        <div className="col-5 d-flex justify-content-center align-items-center gap-2">
          {role==="Student" ?
          (
            <>
            <button className='btn btn-sm btn-outline-info my-1' onClick={showExamList}>Exam List</button>
            </>
          ):
          (
            <>
            {role!=="Admin" &&<>
            <button className='btn btn-sm btn-info my-1' onClick={handleEdit}>Edit</button>
            <button className='btn btn-sm btn-danger my-1' onClick={()=>handleDelete(item.id)}>Delete</button>
            </>
            }
            <button className='btn btn-sm btn-success my-1' onClick={() => Navigate(`/profile/subject/${item.id}`)}>More Options</button>
            </>
          )
          }
        </div>
      {
        showExam &&<ExamList SubjectId={item.id}/>
      }
      { showModel &&
        < SubjectOption btnName="Update" Sid={item.id} handleClose={handleEdit} show={showModel} Cid=""/>
      }
    </div>
  );
}
export default SubjectItem;
// show, handleClose, btnName, Cid, Sid