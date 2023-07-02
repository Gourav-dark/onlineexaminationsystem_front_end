import API from "./Config";

const URL = "Questions/";
// 1.list of subject base on Course Id
export const useQuestionsBySid = () => {
    const Response = {
        Data: [],
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        console.log(data);
        try {
            const res = await API.get(`${URL}QuestionsListBySubject/${data.Sid}`, {
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
// 2. add Question In Subject
export const useAddQuestionApi = () => {
    const Response = {
        Message: "Page Not Found",
        StatusCode: 404
    };
    const ApiConfig = async (data) => {
        console.log(data);
        try {
            const res = await API.post(`${URL}AddQuestion?Sid=${data.Sid}&Eid=${data.Eid}`,data.Question,{
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            });
            Response.Message=res.data;
            Response.StatusCode = res.status;
        }catch(error){
            Response.Message = error.response.data;
            Response.StatusCode = error.response.status;
            console.log(error);
        }
        return Response;
    }
    return ApiConfig;
};