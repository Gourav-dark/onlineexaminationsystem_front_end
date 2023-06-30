import API from "./Config";

//Institute Detail URL start
const SUrl="InstituteDetails/";
// 1.Institute Detail ---GET
const InstituteListAPI=async()=>{
    const Response = {
        Institutelist:[],
        StatusCode: 400
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
        Message:'No Registration',
        StatusCode: 400
    };
    const RegisterInstituteApi = async (instituteDetail) => {
        try {
            const res = await API.post(`${SUrl}RegisterInstitute`,instituteDetail);
            Response.Message = res.data.message;
            Response.Id = res.data.id;
            Response.StatusCode = res.status;
            // console.log(res);
        } catch (error) {
            Response.StatusCode = error.response.status;
            Response.Message = error.response.data;
        }
        return Response;
    }
    return RegisterInstituteApi;
}
export { useRegisterInstituteApi };

const useFindInstituteApi =() => {
    const Response = {
        instituteDetail: {},
        Message:'',
        StatusCode: 400
    };
    const FindInstituteApi = async (Id)=>{
        try {
            const res = await API.get(`${SUrl}Find/${Id}`);
            Response.instituteDetail = res.data;
            Response.StatusCode = res.status;
            // console.log(res.data);
        } catch (error) {
            Response.StatusCode = error.response.status;
            Response.Message = error.response.data;
        }
        return Response;
    }
    return FindInstituteApi;
}
export {useFindInstituteApi};

const useUpdateInstituteApi=()=>{
    const Response = {
        Message:'',
        StatusCode: 400
    };
    const UpdateInstituteApi=async(data)=>{
        console.log(data);
        console.log(data.Institute);
        try{
            const res=await API.put(`${SUrl}UpdateInstitute/${data.Id}`,data.Institute,{
                headers: {
                    'Authorization': `Bearer ${data.Token}`
                }
            });
            Response.Message = res.data;
            Response.StatusCode = res.status;
        }catch(error){
            console.log(error);
            Response.StatusCode = error.response.status;
            Response.Message = error.response.data;
        }
        return Response;
    }
    return UpdateInstituteApi;
}
export {useUpdateInstituteApi};