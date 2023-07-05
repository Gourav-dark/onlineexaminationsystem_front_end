const InstituteItem = ({item}) => {
  return (
    <div className="row mx-2 py-1 border border-2 border-dark border-top-0 text-white">
      <div className="col-3 d-flex justify-content-center align-items-center">{item.instituteName}</div>
      <div className="col-2 d-flex justify-content-center align-items-center">{item.location}</div>
      <div className="col-1 d-flex justify-content-center align-items-center">{item.city}</div>
      <div className="col-3 d-flex justify-content-center align-items-center">{item.postalCode}</div>
      <div className="col-2 d-flex justify-content-center align-items-center">{item.city}</div>
      <div className="col-1 d-flex justify-content-center align-items-center">{item.country}</div>
  </div>
  )
}

export default InstituteItem;
