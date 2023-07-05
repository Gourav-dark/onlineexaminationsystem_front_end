const EnrollCourseItem = ({item,handleEnrollCourse}) => {
  return (
    <div className="row mx-2 bg-secondary border border-1 border-dark border-top-0  d-flex align-items-center text-info">
        <div className="col-4 d-flex justify-content-center">{item.courseName}</div>
        <div className="col-4 d-flex justify-content-center">{item.departmentName}</div>
        <div className="col-4 d-flex justify-content-center">
            <button className="btn btn-sm btn-success my-1 border" onClick={()=>handleEnrollCourse(item.id)}>Enroll</button>
        </div>
    </div>
  )
}

export default EnrollCourseItem;
