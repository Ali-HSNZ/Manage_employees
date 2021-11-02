import Styles from './AllProfile.module.css'
import Container from "../../Components/Loding/Loding"
import { toast} from "react-toastify"
import deleteUser from '../../http/delete/delete'
import { useEffect, useState } from 'react'
import getData from '../../http/get/get'
import UserProfileComponent from '../../Components/User Profile/UserProfileComponent'

const AllProfile = (props) => {

    const [allUser , setAllUser] = useState(null)




    useEffect(()=>{
        const getAllUser = async()=> {
            try {
                const {data} = await getData()
                setAllUser(data)
            } catch (error) {}
        }
        getAllUser()
    },[])
    

    
    const deleteHandler = (id , FirstName , LastName) => {
        const deleteOneUser = async()=> {
             try {
                 await deleteUser(id)
                 toast.success(` کارمند : ${FirstName} ${LastName} اخراج شد`)
                 props.history.push("/")
             } catch (error) {
                 
             }
            
        } 
        deleteOneUser()
    }

    const renderComponent = ()=> {
        let returnValue;


        if(allUser){
            returnValue = allUser.map(user => (
                <UserProfileComponent 
                    key={user.id} 
                    user={user} 
                    deleteHandler={deleteHandler}
                />
            ))
        }else{
            returnValue = Container()
        }
        return returnValue;
    }


    return (  
        <>
            <div style={{ with:'100%', height:"20px", }}></div>
            <div className={Styles.parent}>{renderComponent()}</div>
        </>
    );
}
 
export default AllProfile;