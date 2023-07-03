import API from "./Config";

const URL = "Subjects/";
// 1.list of subject base on Course Id
export const useISubjectbyCourseId = () => {
    const Response = {
        Data: [],
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        try {
            const res = await API.get(`${URL}Subjectlistbycourse/${data.Cid}`, {
                headers: {
                    'Authorization': `Bearer ${data.Token}`
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
//2. Add Subject By Course Id
export const useAddSubjectbyCourseId = () => {
    const Response = {
        Message: "Page Not Found",
        StatusCode: 404
    };
    const ApiConfig = async (data) => {
        try {
            const res = await API.post(`${URL}AddSubject/${data.Cid}`,data.Subject,{
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
//3. Find subject By subject Id
export const useFindSubject= () => {
    const Response = {
        Data: {},
        Message: "Page Not Found",
        StatusCode: 404
    };
    const ApiConfig = async (data) => {
        try {
            const res = await API.get(`${URL}FindSubject/${data.Sid}`,{
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            });
            Response.Data=res.data;
            Response.StatusCode = res.status;
            // console.log(res);
        }catch(error){
            Response.Message = error.response.data;
            Response.StatusCode = error.response.status;
            console.log(error);
        }
        return Response;
    }
    return ApiConfig;
};

//3. Update Subject
export const useUpdateSubjectApi = () => {
    const Response = {
        Message: "Page Not Found",
        StatusCode: 404
    };
    const ApiConfig = async (data) => {
        try {
            const res = await API.put(`${URL}Update/${data.Sid}`,data.Subject,{
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

//3. Update Subject
export const useDeleteSubjectApi = () => {
    const Response = {
        Message: "Page Not Found",
        StatusCode: 404
    };
    const ApiConfig = async (data) => {
        try {
            const res = await API.delete(`${URL}Delete/${data.Sid}`,{
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