import API from "./Config";
const URL = "Results/";
// 1.All Result list
export const useAllResultsApi = () => {
    const Response = {
        Data: [],
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        // console.log(data);
        try {
            const res = await API.get(`${URL}ResultsList`, {
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            });
            Response.Data=res.data;
            Response.StatusCode = res.status;
            Response.Message = "";
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
// 2.Result list by Student Id
export const useResultsUserIdApi = () => {
    const Response = {
        Data: [],
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        // console.log(data);
        try {
            const res = await API.get(`${URL}ResultByStudentId/${data.userId}`, {
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            });
            Response.Data=res.data;
            Response.StatusCode = res.status;
            Response.Message = "";
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
// 1.Add Result list
export const useGenerateResultsApi = () => {
    const Response = {
        Data:"",
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        // console.log(data);
        try {
            const res = await API.post(`${URL}GenerateResult?sId=${data.userId}&eId=${data.Exid}`,data.Data,{
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            });
            Response.Data=res.data;
            Response.StatusCode = res.status;
            Response.Message = "";
            console.log(res.data);
        }catch(error){
            Response.Message = error.response.data;
            Response.StatusCode = error.response.status;
            console.log(error);
        }
        return Response;
    }
    return configApi;
};