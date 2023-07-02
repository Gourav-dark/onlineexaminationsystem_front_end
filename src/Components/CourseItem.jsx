// import { useState } from 'react';
import { useState } from "react";
import { BiCaretRight,BiCaretDown } from "react-icons/bi";
import SubjectList from "./SubjectList";
import SubjectOption from "./SubjectOption";

export const CourseItem = ({ item }) => {
    const [showSList, setshowSList] = useState(false);
    const [showAddSubject, setshowAddSubject] = useState(false);
    const handleshowaddsubject = () => {
        setshowAddSubject(!showAddSubject);
    }
    const showsubjectlist = () => {
        setshowSList(!showSList);
    }
    return (
        <div className="row bg-light mx-2 py-1 border border-dark border-top-0">
            <div className='col-3 my-2'>
                {showSList===true ?
                    <BiCaretDown onClick={showsubjectlist} className='bg-info text-light rounded me-2' style={{width:"1.5rem",height:"1.5rem",cursor: "pointer"}}/>
                    :
                    <BiCaretRight onClick={showsubjectlist} className='bg-primary text-light rounded me-2' style={{width:"1.5rem",height:"1.5rem",cursor: "pointer"}}/>
                }
                {item.courseName}
            </div>
            <div className='col-3 my-2'>{item.departmentName}</div>
            <div className="col-6 d-flex justify-content-center gap-1">
                <button className='btn btn-sm btn-info my-1'>Edit</button>
                <button className='btn btn-sm btn-danger my-1'>Delete</button>
                <button className='btn btn-sm btn-success my-1' onClick={handleshowaddsubject}>Add Subject</button>
            </div>
            {showSList && <SubjectList Cid={item.id} />}
            {/* hode Item for Course */}
            <SubjectOption
                handleClose={handleshowaddsubject}
                show={showAddSubject}
                btnName="Add Subject"
                Cid={item.id}
            />
        </div>
  );
};