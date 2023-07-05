const ResultItem = ({ item }) => {

  return (
    <div className="row bg-secondary py-1 border border-1 border-top-0 border-white text-info">
      <div className="col-3 d-flex justify-content-center align-items-center">{item.examId}</div>
      <div className="col-3 d-flex justify-content-center align-items-center">{item.studentId}</div>
      <div className="col-2 d-flex justify-content-center align-items-center">{item.totalMarks}</div>
      <div className="col-1 d-flex justify-content-center align-items-center">{item.marksObtained}</div>
      <div className="col-1 d-flex justify-content-center align-items-center">{item.obtainedPercentage}</div>
      <div className="col-2 d-flex justify-content-center align-items-center">{item.gradeObtained}</div>
    </div>
  );
};

export default ResultItem;
