const QuestionItem = ({item}) => {
  return (
    <ol className="QuestionItem mx-2 px-4 py-1 border border-2 border-dark rounded-1" type="1">
          <li style={{width:"100%"}}>{item.questionTitle}
              <span className="border border-1 rounded-1 p-1 text-primary ms-5" style={{fontSize:"12px",fontWeight:"bold",float: "right"}}>Mark : {item.mark}</span>
          </li>
          <ol className="QuestionAnswer" type="A">
              <li>{item.option_A}</li>
              <li>{item.option_B}</li>
              <li>{item.option_C}</li>
              <li>{item.option_D}</li>
          </ol>
          <p className="p-0 m-0 border px-2 rounded-2">Correct Anserer : {item.correctOption}</p>
          <div className="mt-1 d-flex gap-1 justify-content-end">
            <button className="btn btn-sm btn-info">Edit Question</button>
            <button className="btn btn-sm btn-danger">Delete</button>
          </div>
    </ol>
  )
}
export default QuestionItem;
