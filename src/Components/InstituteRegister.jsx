import { useState } from "react";

const InstituteRegister = () => {
    const [InstituteDetail,setInstituteDetail]=useState(
        {
            "instituteName": "B.P. Poddar Institute of Management and Technology",
            "location": "VIP Road",
            "city": "Kolkata",
            "postalCode": "700052",
            "state": "West Bengal",
            "country": "India"
        });
    const handlebyInput = (event) => {
        const { name, value } = event.target;
        setInstituteDetail((prev) => {
            return { ...prev, [name]: value };
        });
    }
    return (
    <>
    <div className="row">
        <div className="col-md-12 mb-4">
            <div className="form-outline w-100">
                <input type="text" className="form-control form-control-lg" name="instituteName" value={InstituteDetail.instituteName} onChange={handlebyInput}/>
                <label className="form-label">Institute Name</label>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 mb-4">
            <div className="form-outline">
                <input type="text" className="form-control form-control-lg" name="location" value={InstituteDetail.location} onChange={handlebyInput}/>
                <label className="form-label">Location</label>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="form-outline">
                <input type="number" className="form-control form-control-lg" name="postalCode" value={InstituteDetail.postalCode} onChange={handlebyInput}/>
                <label className="form-label">Postal Code</label>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 mb-4">
            <div className="form-outline">
                <input type="text" className="form-control form-control-lg" name="state" value={InstituteDetail.state} onChange={handlebyInput}/>
                <label className="form-label">State</label>
            </div>
        </div>
        <div className="col-md-6 mb-4">

            <div className="form-outline">
                <input type="text" className="form-control form-control-lg" name="country" value={InstituteDetail.country} onChange={handlebyInput}/>
                <label className="form-label">Country</label>
            </div>
        </div>
    </div>
    <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">Institute Admin Form</h3>
    </>
  )
}

export default InstituteRegister;
