import http from "../http";


const deleteUser = (id)=> {
    return http.delete(`/user/${id}`)
}
export const deleteAllUser = ()=> {
    return http.delete(`/user`)
}

export default deleteUser


