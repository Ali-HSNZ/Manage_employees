import Styles from './UserList.module.css'
import { useEffect, useState } from 'react';
import getData from '../../http/get/get';
import Container from '../../Components/Loding/Loding';
import UserListComponent from '../../Components/User List/UserListComponent';
import { FiUsers } from "react-icons/fi";
const User = () => {
    const [allData , setAlldata] = useState(null)

    useEffect(()=>{
        const getAllData = async()=> {
            try {
                const {data} = await getData()
                setAlldata(data)
            } catch (error) {}
        }
        getAllData()
    },[])

    // CompoenentDidMount => وقتی که بار اول کامپوننت رندر میشه

    // ComponentWillUpdate






    const renderComponent = ()=> {
        let returnValue;


        if(allData){
            returnValue =  allData.map(user => (
               <UserListComponent key={user.id} user={user}/>
            ))
        }else{
            returnValue = Container()
        }


        return returnValue;
    }
    
    

    return (  
        <>
            <div style={{height:"20px"}}></div>

                <div className={Styles.header_CountAllUser}>
                    <FiUsers size="25px"/>
                    <span>{allData ? allData.length : "~"}</span>
                </div>

                <div className={Styles.parent}>
                    {renderComponent()}
                </div>
        </>
    );
}
 
export default User;