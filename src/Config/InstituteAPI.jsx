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
export default InstituteListAPI;