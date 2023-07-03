import { useState,useEffect,useContext } from "react";
import SubjectItem from "./SubjectItem";
import { useISubjectbyCourseId } from "../Config/SubjectAPI";
import { AuthContext } from "../Config/AuthProvider";
const SubjectList = ({Cid}) => {
    const [Message,setMessage]=useState("");
    const [showSubjectlist, setSubjectlist] = useState([]);
    
    const { token } = useContext(AuthContext);
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
    return (
        <div className="SubjectList">
            <div className="row mx-3 mt-1 bg-secondary rounded-top-2 border-bottom border-dark border-2 py-1 text-light">
                    <div className="col-3">Subject Name</div>
                    <div className="col-3">Subject Code</div>
                    <div className="col-6 d-flex justify-content-center">More Option</div>
            </div>
            {
                Object.keys(showSubjectlist).length !== 0 ?
                    showSubjectlist.map((item) =>
                        <SubjectItem key={item.id} item={item} />)
                :
                <div className="alert alert-danger mx-3 py-1 " role="alert">
                        {Message}
                </div>
             }
        </div>
  )
}

export default SubjectList
