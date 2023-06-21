import API from "./Config";
// import { useCookies } from 'react-cookie';


// 1.Login Page 
const useLoginAPI = () => {
  // const [Cookies,setCookie] = useCookies(['UserLoginDetail']);
  const response = {
      Massage: "Page Not Found",
      StatusCode: 404
    };
  const loginAPI = async (loginDetail) => {
    try {
      const res = await API.post("Users/Login", loginDetail);
      // const { token, massage } = res.data;
      const { massage } = res.data;
      response.Massage = massage;
      response.StatusCode = res.status;
      // setCookie('AccessCode', token);
    } catch (error) {
      const { massage } = error.response.data;      
      response.Massage = massage;
      response.StatusCode = error.response.status;
    }
    return response;
  };
  return loginAPI;
};
export default useLoginAPI;
