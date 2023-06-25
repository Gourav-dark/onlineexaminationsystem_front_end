import { useState, useEffect, useCallback } from "react";
import InstituteListAPI from "../Config/InstituteAPI";

const InstututeList = ({ onSelectedIdChange }) => {
    const [Institutelist, setInstitutelist] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const Res = await InstituteListAPI();
            if (Res.StatusCode === 200) {
                setInstitutelist(Res.Institutelist);
            }
            else {
                console.log("Data not Fatched");
            }
            }
            fetchData();
        }, []);
    const changeOption = useCallback((event) => {
        const selectedId = event.target.value;
        onSelectedIdChange(selectedId);
        console.log(selectedId);
    },[onSelectedIdChange]);
    return (
        <div className="row">
            <div className="col-12">
                <select className="select form-control-lg w-100 select-custom-size" name="InstituteId" onSelect={changeOption}>
                    <option>Choose option</option>
                    {
                        Institutelist.map((InstituteDetail) => {
                            const { id, instituteName, city } = InstituteDetail;
                            return <option key={id} value={id}>{instituteName}, {city}</option>
                        })
                    }
                </select>
                <label className="form-label select-label ms-2">Select Institute Name</label>
            </div>
        </div>
    );
}

export default InstututeList;
