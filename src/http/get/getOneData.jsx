import http from "../http"

export const getOneData =(id)=> {

    return http.get(`/user/${id}`)
}
export default getOneData 