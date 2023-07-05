const ResultItem = ({item}) => {
  return (
    <div className="row mt-2 text-white bg-dark rounded-top-2 py-1 border-2 border-bottom">
        <div className="col-3 d-flex justify-content-center align-items-center"></div>
        <div className="col-3 d-flex justify-content-center align-items-center"></div>
        <div className="col-2 d-flex justify-content-center align-items-center">{item.totalMarks}</div>
        <div className="col-1 d-flex justify-content-center align-items-center">{item.marksObtained}</div>
        <div className="col-1 d-flex justify-content-center align-items-center">{item.obtainedPercentage}</div>
        <div className="col-2 d-flex justify-content-center align-items-center">{item.gradeObtained}</div>
    </div>
  )
}

export default ResultItem;
