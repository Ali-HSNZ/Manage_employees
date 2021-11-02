import Styles from './UserProfileComponent.module.css'
import defaultImage from '../../image/11.png'
import { Link } from 'react-router-dom';
const UserProfileComponent = ({user , deleteHandler}) => {
    return (  
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
        <Link className={Styles.editBtn} to={{pathname:`/user/edit/${user.id}`,type : "Search"}} >ویرایش</Link>

            <button className={Styles.deleteBtn} onClick={()=>deleteHandler(user.id , user.FirstName , user.LastName)}>اخراج</button>
        </div>

    </div>
    );
}
 
export default UserProfileComponent;