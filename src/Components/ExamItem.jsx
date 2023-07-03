const ExamItem = ({item,handleDelete}) => {
  return (
    <div className="row mx-2 border border-1 border-dark border-top-0 d-flex align-items-center">
      <div className="col-2">{item.examName}</div>
      <div className="col-2">{item.date}</div>
      <div className="col-1">{item.time}</div>
      <div className="col-2">{item.duration}</div>
      <div className="col-2">{item.noOfQuestion}</div>
      <div className="col-1">{item.totalMark}</div>
      <div className="col-2 d-flex justify-content-center gap-1">
        <button className="btn btn-info btn-sm my-1">Edit</button>
        <button className="btn btn-danger btn-sm my-1 px-1" onClick={()=>handleDelete(item.id)}>Delete</button>
      </div>
    </div>
  )
}
export default ExamItem;
