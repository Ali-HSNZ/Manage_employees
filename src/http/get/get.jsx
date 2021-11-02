import http from "../http";

const getData =()=> {
   return http.get("/user")
}
export default getData
