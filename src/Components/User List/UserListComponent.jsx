import { Link } from 'react-router-dom';
import Styles from './UserListComponent.module.css'
import defaultImage from '../../image/11.png'
const UserListComponent = ({user}) => {
    return (  
        <div className={Styles.item}>
        <div className={Styles.imgParent}>
            <img alt="عکس کارمند" src={user.avatar ? user.avatar : defaultImage } className={Styles.img}/>
        </div>
        <div className={Styles.ulParent}>
            <ul className={Styles.ul}>
                <li dir = "rtl">نام : {user.FirstName}</li>
                <li dir = "rtl">نام خانوادگی : {user.LastName}</li>
                <li dir = "rtl">مسئولیت : {user.Duty}</li>
            </ul>
        </div>
        <nav className={Styles.nav}>
            <Link to={`userList/user/${user.id}`}>بیشتر</Link>
        </nav>
    </div>
    );
}
 
export default UserListComponent;