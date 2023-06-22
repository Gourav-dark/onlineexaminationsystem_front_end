import API from "./Config";
// import { useCookies } from 'react-cookie';


// 1.Login Page ---POST
const useLoginAPI = () => {
  // const [Cookies,setCookie] = useCookies(['UserLoginDetail']);
  const Response = {
      Massage: "Page Not Found",
      StatusCode: 404
    };
  const loginAPI = async (loginDetail) => {
    try {
      const res = await API.post("Users/Login", loginDetail);
      // const { token, massage } = res.data;
      const { massage } = res.data;
      Response.Massage = massage;
      Response.StatusCode = res.status;
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
