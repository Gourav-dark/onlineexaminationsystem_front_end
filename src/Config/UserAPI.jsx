import API from "./Config";
// import { useCookies } from 'react-cookie';

const URL = "Users/";

// 1.Login Page ---POST
const useLoginAPI = () => {
  // const [Cookies,setCookie] = useCookies(['UserLoginDetail']);
  const Response = {
      Message: "Page Not Found",
      StatusCode: 404,
      Token:""
    };
  const loginAPI = async (loginDetail) => {
    try {
      const res = await API.post(`${URL}Login`, loginDetail);
      const { token, message } = res.data;
      Response.Message = message;
      Response.StatusCode = res.status;
      Response.Token = token;
      // setCookie('AccessCode', token);
    } catch (error) {
      const { message } = error.response.data;      
      Response.Message = message;
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
      Message: "Page Not Found",
      StatusCode: 404
  };
  const SignupAPI = async (signupDetail) => {
    try {
      const res = await API.post(`${URL}Signup?roleId=${signupDetail.roleId}&instituteId=${signupDetail.Iid}`, signupDetail.user);
      const { message, userId } = res.data;
      Response.StatusCode = res.status;
      Response.userId = userId;
      Response.Message = message;
    } catch(error) {
      Response.Message = error.response.data;
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
      Message: "",
      StatusCode: 404
  };
  const FindUserApi = async (data) => {
    // console.log(data);
    try{
      const res=await API.get(`${URL}UserFind/${data.id}`,{
          headers: {
            'Authorization': `Bearer ${data.Token}`
          }
      });
      Response.userdetail=res.data;
      Response.StatusCode = res.status;
      // console.log(res.data);
    }catch(error){
      Response.Message = error.response.data;
      Response.StatusCode = error.response.status;
      console.log(error);
    }
    return Response;
  }
  return FindUserApi;
}
export {useFindUserApI};

const useUpdateAPI = () => {
  const Response = {
      Message: "Page Not Found",
      StatusCode: 404
  };
  const UpdateAPI = async (data) => {
    try {
      const res = await API.put(`${URL}Update/${data.Id}`,data.user,{
        headers: {
          'Authorization': `Bearer ${data.Token}`
        }
      });
      Response.StatusCode = res.status;
      Response.Message = res.data;
      console.log(res);
    } catch(error) {
      Response.Message = error.response.data;
      Response.StatusCode = error.response.status;
    }
    return Response;
  }
  return UpdateAPI;
}
export {useUpdateAPI};

//Use List for Amdin page
export const useUserListApi=()=>{
  const Response = {
    Data:[],
    Message: "Page Not Found",
    StatusCode: 404
  };
  const ApiConfig=async(data)=>{
    // console.log(data);
    try {
      const res=await API.get(`${URL}Userlist`,{
        headers: {
          'Authorization': `Bearer ${data.token}`
        }
      });
      Response.Data=res.data;
      Response.StatusCode = res.status;
    }catch(error){
      Response.Message = error.response.data;
      Response.StatusCode = error.response.status;
    }
    return Response;
  }
  return ApiConfig;
}
//Active or Deactive for Amdin page
export const useUserIsActiveApi=()=>{
  const Response = {
    Message: "Page Not Found",
    StatusCode: 404
  };
  const ApiConfig=async(data)=>{
    // console.log(data.token);
    try {
      const res = await API.put(`${URL}ActivatedStatus/${data.UserId}`, {},{
        headers: {
          'Authorization': `Bearer ${data.Token}`
        }
      });
      Response.Message=res.data;
      Response.StatusCode = res.status;
    }catch(error){
      Response.Message = error.response.data;
      Response.StatusCode = error.response.status;
    }
    return Response;
  }
  return ApiConfig;
}
/// Find User
export const useFindUserId = () => {
  const Response = {
      Data: {},
      Message: "Page Not Found",
      StatusCode: 404
  };
  const configApi = async (data) => {
      try {
          const res = await API.get(`${URL}UserFind/${data.userId}`, {
              headers: {
                  'Authorization': `Bearer ${data.token}`
              }
          });
          Response.Data=res.data;
          Response.StatusCode = res.status;
          // console.log(res.data);
      }catch(error){
          Response.Message = error.response.data;
          Response.StatusCode = error.response.status;
          console.log(error);
      }
      return Response;
  }
  return configApi;
};