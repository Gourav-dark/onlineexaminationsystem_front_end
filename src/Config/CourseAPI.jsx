import API from "./Config";

//course URL start
const URL = "Courses/";

// 1. Institute Course List Course List

export const useICourseListApi = () => {
    const Response = {
        courseList:[],
        Message:'No Registration',
        StatusCode: 400
    };
    const IcourseListApi = async (Id) => {
        try {
          const res = await API.get(`${URL}InstituteCourses/${Id}`);
            // console.log(res);
            Response.courseList = res.data;
            Response.StatusCode = res.status;
            Response.Message = "";
        } catch (error) {
            Response.Message = error.response.data;
            Response.StatusCode = error.response.status;
            console.log(error);
        }
        return Response;
    }
    return IcourseListApi;
};
// 1. Add Course4
export const useaddCourseApi = () => {
    const Response = {
        Message:'No Registration',
        StatusCode: 400
    };
    const AddApi = async (data) => {
        console.log(data);
        try {
            const res = await API.post(`${URL}AddCourse/${data.Iid}`, data.Course, {
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            });
            Response.StatusCode = res.status;
            Response.Message = res.data;
            // console.log(res);
        } catch (error) {
            Response.Message = error.response.data;
            Response.StatusCode = error.response.status;
            console.log(error);
        }
        return Response;
    }
    return AddApi;
};