import API from "./Config";

const URL = "EnrollStudents/";

// 1. course Id by Student Id
export const useCourseIdByStudentId = () => {
    const Response = {
        Data: "",
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        // console.log(data);
        try {
            const res = await API.get(`${URL}CourseIdByStudentId/${data.userId}`, {
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

// 2. Enroller Course
export const useEnrollCourse = () => {
    const Response = {
        Message: "Page Not Found",
        StatusCode: 404
    };
    const configApi = async (data) => {
        // console.log(data);
        try {
            const res = await API.post(`${URL}AddEnrollStudent`,data.enrolldata,{
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            });
            Response.Message=res.data;
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