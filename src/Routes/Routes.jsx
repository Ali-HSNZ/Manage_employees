import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import UserList from "../Pages/UserList/UserList";
import User from "../Pages/User/User";
import AddUser from "../Pages/AddUser/AddUser";
import SearchUser from "../Pages/AllProfile/AllProfile";
import Edit from "../Pages/Edit/Edit";
import Search from "../Pages/Search/Search";

const Routes = [
    {path : "/userList/user/:id" , component:User},
    {path : "/user/edit/:id" , component:Edit},
    {path : "/userList/all-Profile" ,component:SearchUser},
    {path : "/userList/search" ,component:Search},
    {path : "/new-user" , component : AddUser},
    {path : "/" , component : UserList , exact : true},
    {component : NotFoundPage},
]
export default Routes
