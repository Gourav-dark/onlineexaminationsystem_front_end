const UserItem = ({ item,handleIsActive}) => {
    return (
        <div className="row mx-2 py-1 text-light border border-dark border-2 border-top-0">
            <div className="col-4 d-flex justify-content-center align-items-center">{item.id}</div>
            <div className="col-3 d-flex justify-content-center align-items-center">{item.fname} {item.lname}</div>
            <div className="col-3 d-flex justify-content-center align-items-center">{item.email}</div>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <button className={`btn py-0 ${item.status ? "btn-success" : "btn-danger"}`} onClick={()=>handleIsActive(item.id)}>{item.status ? "Active" : "Inactive"}</button>
            </div>
            {/* <div className="col-2 d-flex justify-content-center align-items-center"></div> */}
      </div>
  );
}

export default UserItem;
