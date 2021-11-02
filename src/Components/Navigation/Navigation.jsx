import Styles from './Navigation.module.css'
import logo from '../../image/logo1.png'
import { Link, NavLink } from 'react-router-dom';
import {useState } from 'react';
import { RiHome2Line ,RiUserAddLine , RiUserLine , RiSearchLine} from "react-icons/ri";

const Navigation = () => {
    const [inputValue , setInputValue] = useState("")

    return (  
        <div className={Styles.navigation}>

            <div className={Styles.inputParent}>
                
                <Link className={Styles.searchBtn}  onClick={()=> setInputValue("") } to={{ pathname:"/userList/search" ,  search: `value=${inputValue}`,type: "search" }}>
                    جستجو
                    <RiSearchLine size="18"/> 
                </Link>

              <input onChange={e =>  setInputValue(e.target.value)}  value={inputValue} type="text" dir="rtl" placeholder={`جستجو بین کارمندان`}/>
            
            </div>
            
            <div className={Styles.navParent}>
                <nav className={Styles.nav}>

                    <NavLink activeClassName = {Styles.iconParentStyle_active} className={Styles.iconParentStyle} to="/new-user">
                        ثبت کارمند 
                        <RiUserAddLine className={Styles.iconParentStyle} size="20"/>
                    </NavLink>

                    <NavLink activeClassName = {Styles.iconParentStyle_active} className={Styles.iconParentStyle} to={{pathname:"/userList/all-Profile" , type: "allUser"}}>
                        مشخصات کارمندان
                        <RiUserLine  className={Styles.iconParentStyle} size="20"/>
                    </NavLink>

                    <NavLink activeClassName = {Styles.iconParentStyle_active} exact={true} className={Styles.iconParentStyle} to="/">
                        صفحه اصلی 
                        <RiHome2Line className={Styles.iconParentStyle} size="20"/>
                    </NavLink>
                    
                </nav>
            </div>

                    
            <div className={Styles.logoParent}>
                <div><img src={logo} alt="logo"/></div>
            </div>
        </div>
        
    );
}
 
export default Navigation;