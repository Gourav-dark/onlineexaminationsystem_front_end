import API from "./Config";
// import { useCookies } from 'react-cookie';

const SUrl = "Users/";

// 1.Login Page ---POST
const useLoginAPI = () => {
  // const [Cookies,setCookie] = useCookies(['UserLoginDetail']);
  const Response = {
      Massage: "Page Not Found",
      StatusCode: 404,
      Token:""
    };
  const loginAPI = async (loginDetail) => {
    try {
      const res = await API.post(`${SUrl}Login`, loginDetail);
      const { token, massage } = res.data;
      // const { massage } = res.data;
      Response.Massage = massage;
      Response.StatusCode = res.status;
      Response.Token = token;
      // setCookie('AccessCode', token);
    } catch (error) {
      const { massage } = error.response.data;      
      Response.Massage = massage;
      Response.StatusCode = error.response.status;
    }
    return Response;
  };
  return loginAPI;
};
export default useLoginAPI;

// 2. SignUp 
const useSignupAPI = () => {
  const Response = {
      userId:"",
      Massage: "Page Not Found",
      StatusCode: 404
  };
  const SignupAPI = async (signupDetail) => {
    try {
      const res = await API.post(`${SUrl}Signup?roleId=${signupDetail.roleId}&instituteId=${signupDetail.Iid}`, signupDetail.user);
      const { massage, userId } = res.data;
      Response.StatusCode = res.status;
      Response.userId = userId;
      Response.Massage = massage;
    } catch(error) {
      Response.Massage = error.response.data;
      Response.StatusCode = error.response.status;
    }
    return Response;
  }
  return SignupAPI;
}
export { useSignupAPI };

const useFindUserApI=()=>{
    const Response = {
      userdetail:{},
      Massage: "",
      StatusCode: 404
  };
  const FindUserApi = async (data) => {
    // console.log(data);
    try{
      const res=await API.get(`${SUrl}UserFind/${data.id}`,{
          headers: {
            'Authorization': `Bearer ${data.Token}`
          }
      });
      Response.userdetail=res.data;
      Response.StatusCode = res.status;
      // console.log(res.data);
    }catch(error){
      Response.Massage = error.response.data;
      Response.StatusCode = error.response.status;
      console.log(error);
    }
    return Response;
  }
  return FindUserApi;
}
export {useFindUserApI};