import { useState } from "react";
import SubjectOption from "./SubjectOption";
import { useNavigate } from "react-router-dom";
const SubjectItem = ({ item }) => {
  const Navigate = useNavigate();
  const [showModel, setshowModel] = useState(false);
  const handleEdit = () => {
    setshowModel(!showModel);
  }
  return (
    <div className="row mx-3 bg-secondary border border-dark border-2 border-top-0 text-light">
        <div className="col-3 ms-1 mt-1">{item.subjectName}</div>
        <div className="col-3 mt-1">{item.subjectCode}</div>
        <div className="col-5 d-flex justify-content-center gap-2">
                <button className='btn btn-sm btn-info my-1' onClick={handleEdit}>Edit</button>
                <button className='btn btn-sm btn-danger my-1'>Delete</button>
                <button className='btn btn-sm btn-success my-1' onClick={() => Navigate(`/profile/subject/${item.id}`)}>More Options</button>
        </div>
      { showModel &&
        < SubjectOption btnName="Update" Sid={item.id} handleClose={handleEdit} show={showModel} Cid=""/>
      }
    </div>
  );
}
export default SubjectItem;
// show, handleClose, btnName, Cid, Sid