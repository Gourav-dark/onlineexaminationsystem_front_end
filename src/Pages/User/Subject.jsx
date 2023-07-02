import { useState, useEffect, useContext } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useFindSubject } from "../../Config/SubjectAPI";
import { AuthContext } from "../../Config/AuthProvider";
const Subject = () => {
    const { Sid } = useParams();
    const { token } = useContext(AuthContext);
    const [Subject, setSubject] = useState({});    
    const ApiCallFind=useFindSubject();
    useEffect(() => {
        // console.log(Sid);
        fun();
    }, [Sid]);
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
    return (
    <>
        <div className="SubjectContains bg-light mt-1 mx-1 rounded-2 pt-1">
            <h6 className="bg-dark text-light py-1 ps-2 mx-1 rounded">Subject Details</h6>
            <div className="row mt-2 mx-2 bg-secondary rounded-top-2 text-white">
                <div className="col-5">Subject Name</div>
                <div className="col-1">:</div>
                <div className="col-5">{Subject.subjectName}</div>
            </div>
            <div className="row mx-2 bg-secondary rounded-bottom-2 text-white">
                <div className="col-5">Subject Code</div>
                <div className="col-1">:</div>
                <div className="col-5">{Subject.subjectCode}</div>
            </div>
            <div className="mt-2 py-1 d-flex justify-content-around border-top border-dark border-2">
                <NavLink className="btn btn-sm btn-dark" to="examlist">Exams List</NavLink>
                <NavLink className="btn btn-sm btn-dark" to="questionlist">Questions List</NavLink>
            </div>
        </div>
        <Outlet/>    
    </>
    );
}
export default Subject;
