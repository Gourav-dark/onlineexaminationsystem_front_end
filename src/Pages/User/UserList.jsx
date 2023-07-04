import { useEffect,useContext,useState } from "react";
import { AuthContext } from "../../Config/AuthProvider";
import { useUserListApi } from "../../Config/UserAPI";
const UserList = () => {
  const { token } =useContext(AuthContext);
  const [userList,setuserList]=useState([]);
  const [Loading,setLoading]=useState(false);
  useEffect(()=>{
    DataFunction();
  },[userList]);
  const callListApi=useUserListApi();
  const DataFunction=async()=>{
    const data={
      token
    }
    const res=await callListApi(data);
    if(res.StatusCode===200){
      setuserList(res.Data);
      console.log(res.Data);
    }else{
      console.log(res.Message);
      console.log(res);
    }
  };
  return (
    <div className="UserList">
    </div>
  )
}

export default UserList;