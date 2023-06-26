import { useState, useEffect } from "react";
import {InstituteListAPI} from "../Config/InstituteAPI";

const InstututeList = (props) => {
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
    const changeOption =(event) =>{
        const {value}=event.target;
        // console.log(value);
        props.handlecallback(value);
    };
    return (
        <div className="row">
            <div className="col-12">
                <select className="select form-control-lg w-100 select-custom-size" name="InstituteId"  onChange={changeOption}>
                    <option value="0">Choose option work</option>
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
