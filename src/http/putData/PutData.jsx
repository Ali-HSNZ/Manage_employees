import http from "../http";


const putData = (id,data)=> {
    return http.put(`/user/${id}`, data)
}
export default putData
