import API from "./Config";
import { useCookies } from 'react-cookie';

const SUrl = "Users/";

// 1.Login Page ---POST
const useLoginAPI = () => {
  const [Cookies,setCookie] = useCookies(['UserLoginDetail']);
  const Response = {
      Massage: "Page Not Found",
      StatusCode: 404
    };
  const loginAPI = async (loginDetail) => {
    try {
      const res = await API.post(`${SUrl}Login`, loginDetail);
      const { token, massage } = res.data;
      // const { massage } = res.data;
      Response.Massage = massage;
      Response.StatusCode = res.status;
      setCookie('AccessCode', token);
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