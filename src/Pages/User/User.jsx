import Styles from './User.module.css'
import deleteUser from '../../http/delete/delete'
import { useEffect, useState } from 'react'
import { getOneData } from '../../http/get/getOneData'
import  Container  from '../../Components/Loding/Loding'
import { toast} from 'react-toastify';
import defaultImage from '../../image/11.png'
import { Link } from 'react-router-dom'


const User = (props) => {

    var id = props.match.params.id

    console.log(props)
    
    const [user , setUser] = useState(null)

    useEffect(()=>{
        try {
            const getData = async()=>{
                const {data} = await getOneData(id)
                setUser(data)
            }
            getData()
        } catch (error) {}
    },[id])

    const deleteHandler = () => {
       const deleteOneUser = async()=> {
            try {
                await deleteUser(id)
                toast.success(` کارمند : ${user.FirstName} ${user.LastName} اخراج شد`)
                props.history.push("/")
            } catch (error) {
                
            }
           
       } 
       deleteOneUser()
    }
    
    return (  
        <>
            <div className={Styles.parent}>
                {   user ? 
                       <div className={Styles.item}>

                       <div className={Styles.imageParent}>
                           <img src={user.avatar ? user.avatar : defaultImage} alt="عکس کاربر" className={Styles.img}/>
                       </div>
           
                       <div className={Styles.textParent}>
                           <div className={Styles.textGroup}>
                               <p dir = "rtl">نام  : {user.FirstName}</p>
                               <p dir = "rtl">نام خانوادگی : {user.LastName}</p>
                               <p dir = "rtl">{user.email}</p>
                           </div>
                           <div className={Styles.textGroup}>
                               <p dir = "rtl">شماره تماس : {user.phoneNumber}</p>
                               <p dir = "rtl">کد ملی : {user.codeMeli}</p>
                               <p dir = "rtl">متولد : {user.birthDay}</p>
                           </div>
                           <div className={Styles.textGroup}>
                               <p dir = "rtl">سابقه کار : {user.sabegheKar}</p>
                               <p dir = "rtl">وظیفه : {user.Duty} </p>
                               <p dir = "rtl">شغل قبلی : {user.shoglGhabli}</p>
                           </div>
                           <div className={Styles.textGroup}>
                               <p dir = "rtl">حقوق : {user.hoghogh}</p>
                           </div>
                       </div>
           
                       <div className={Styles.parentBtn}>
                           <button className={Styles.goBackBtn} onClick={()=> props.history.push("/")}>برگشت</button>
                           <Link className={Styles.editBtn} to={{pathname:`/user/edit/${user.id}` , type : "userList"}} >ویرایش</Link>
                           <button className={Styles.deleteBtn} onClick={deleteHandler}>اخراج</button>
                       </div>
           
                   </div>
                :  Container()    }
            </div>
        </>
    );
}
 
export default User;