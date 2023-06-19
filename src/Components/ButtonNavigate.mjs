
import { useNavigate } from "react-router-dom";
const ButtonNavigate =(props)=>{
    const navigate = useNavigate();
    return (
        <button className={props.classname} onClick={() => navigate(props.pageLink)}>{props.btnName}</button>
   );
}
export default ButtonNavigate;