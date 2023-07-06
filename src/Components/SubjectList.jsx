import { useState,useEffect,useContext } from "react";
import SubjectItem from "./SubjectItem";
import { useDeleteSubjectApi, useISubjectbyCourseId } from "../Config/SubjectAPI";
import { AuthContext } from "../Config/AuthProvider";
const SubjectList = ({Cid}) => {
    const [Message,setMessage]=useState("");
    const [showSubjectlist, setSubjectlist] = useState([]);
    
    const { token,user } = useContext(AuthContext);
    const callListApi= useISubjectbyCourseId();
    useEffect(() => {
        fun();
    }, [showSubjectlist]);
    const fun = async () => {
        const data = {
            Cid: Cid,
            Token: token
        }
        const res = await callListApi(data);
        if (res.StatusCode === 200) {
            setSubjectlist(res.Data);
        } else {
            setMessage(res.Message);
        }
    };
    //Delete Subject From List
    const callDeleteApi=useDeleteSubjectApi();
    const handleDelete = async(Sid) => {
        const data = {
            Sid,token
        }
        const res = await callDeleteApi(data);
        if (res.StatusCode === 200) {
            console.log(res.Message);
            fun();
        } else {
            console.log(res);
        }
    }
    return (
        <div className="SubjectList">
            <div className="row mx-2 mt-1 bg-dark rounded-top-2 border-bottom border-light border-2 py-1 text-light">
                    <div className="col-3">Subject Name</div>
                    <div className="col-3">Subject Code</div>
                    <div className="col-6 d-flex justify-content-center">More Options</div>
            </div>
            {
                Object.keys(showSubjectlist).length !== 0 ?
                    showSubjectlist.map((item) =>
                        <SubjectItem key={item.id} item={item} handleDelete={handleDelete} role={user.Role} />)
                :
                <div className="alert alert-danger mx-2 py-1 " role="alert">
                        {Message}
                </div>
             }
        </div>
  )
}

export default SubjectList
