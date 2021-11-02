import http from "../http";

const postAUser= (data)=>{
    return http.post("/user",data)
}

export default postAUser