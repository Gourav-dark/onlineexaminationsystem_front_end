import API from "./Config";

const URL = "ExamDetails/";

// 1 List of Exams by Sid
export const useExamListBySid = () => {
    const Response = {
        Data: [],
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        // console.log(data);
        try {
            const res = await API.get(`${URL}ExamDetailsListBySubject/${data.Sid}`, {
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
export const useAddExamBySid = () => {
    const Response = {
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        console.log(data);
        try {
            const res = await API.post(`${URL}AddExamDetail/${data.Sid}`,data.ExamDetail, {
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