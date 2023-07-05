import { useEffect,useContext,useState } from "react";
import { AuthContext } from "../../Config/AuthProvider";
import { useUserIsActiveApi, useUserListApi } from "../../Config/UserAPI";
import Loader from "../../Components/Loader";
import UserItem from "../../Components/UserItem";

const UserList = () => {
  const { token } =useContext(AuthContext);
  const [userList,setuserList]=useState([]);
  const [Loading,setLoading]=useState(false);
  useEffect(()=>{
    DataFunction();
  },[token]);
  const callListApi=useUserListApi();
  const DataFunction = async () => {
    setLoading(true);
    const data={
      token
    }
    const res=await callListApi(data);
    if(res.StatusCode===200){
      setuserList(res.Data);
      // console.log(res.Data);
    }else{
      console.log(res.Message);
      console.log(res);
    }
    setLoading(false);
  };
  const callIactiveApi = useUserIsActiveApi();
  const handleIsActive = async(UserId) => {
    const dataactive = {
      UserId,Token:token,
    }
    const res = await callIactiveApi(dataactive);
    // console.log(res.Message);
    if (res.StatusCode === 200) {
      DataFunction();
      console.log(res.Message);
    }
    else {
      console.log(res);
    }
  }
  return (
    <div className="UserList mt-2">
      {Loading && <Loader />}
        <div className="mx-2 mt-1 bg-dark text-light p-2 rounded-3 fs-6">All User List</div>
      <div className="row mx-2 mt-2 py-2 rounded-top-2 text-dark border border-3 border-dark text-white">
        <div className="col-4 d-flex justify-content-center align-items-center">User Id</div>
        <div className="col-3 d-flex justify-content-center align-items-center">Name</div>
        <div className="col-3 d-flex justify-content-center align-items-center">Email</div>
        <div className="col-2 d-flex justify-content-center align-items-center">Active Status</div>
        {/* <div className="col-2 d-flex justify-content-center align-items-center"></div> */}
      </div>
      {
        userList.map((user,index)=>(
          <UserItem key={index} item={user} handleIsActive={handleIsActive} />
        ))
      }
    </div>
  )
}

export default UserList;