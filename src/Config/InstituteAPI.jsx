import API from "./Config";

//Institute Detail URL start
const SUrl="InstituteDetails/";
// 1.Institute Detail ---GET
const InstituteListAPI=async()=>{
    const Response = {
        Institutelist:[],
        StatusCode: 404
    };
    try {
        const res = await API.get(`${SUrl}InstituteList`);
        Response.Institutelist=res.data;
        Response.StatusCode = res.status;
    } catch (error) {     
        Response.StatusCode = error.response.status;
    }
    return Response;
}
export {InstituteListAPI};

const useRegisterInstituteApi = () => {
    const Response = {
        Id:0,
        Massage:'No Registration',
        StatusCode: 200
    };
    const RegisterInstituteApi = async (instituteDetail) => {
        try {
            const res = await API.post(`${SUrl}RegisterInstitute`,instituteDetail);
            Response.Massage = res.data.massage;
            Response.Id = res.data.id;
            Response.StatusCode = res.status;
            console.log(res);
        } catch (error) {
            Response.StatusCode = error.response.status;
            Response.Massage = error.response.data;
        }
        return Response;
    }
    return RegisterInstituteApi;
}
export { useRegisterInstituteApi };