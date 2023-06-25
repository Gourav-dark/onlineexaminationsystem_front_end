// import { useEffect } from "react";
import API from "../Config/Config";

const Token = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIlJvbGUiOiJBZG1pbiIsIlVzZXJJZCI6IjkzZjU2MDYyLWI1ODktNDJhMi0zYjQ3LTA4ZGI2ZmI5MWQ2ZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjg3Njg3NzYyLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3Mjg5IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI4OSJ9.aaPxekx0uplT9X3-xmNq0VXJi95XJjnr6nWdVj9n3Wg";
    const UserListbt = async () => {
        try {
            const res = await API.get("Users/Userlist", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            // console.log(token);
            console.log(res);
            console.log(res.data);
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <button onClick={UserListbt} >Click button</button>
        </div>
    )
}
export default Token;
