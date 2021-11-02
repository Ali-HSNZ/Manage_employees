import queryString from 'query-string';
import { useState } from 'react';
import { useEffect } from 'react';
import getData from '../../http/get/get';
import Styles from './Search.module.css'
import { Link } from 'react-router-dom';
import deleteUser from '../../http/delete/delete';
import { toast } from 'react-toastify';
import UserProfileComponent from '../../Components/User Profile/UserProfileComponent';
const Search = (props) => {

    const searchValue = queryString.parse(props.location.search)
    var inputValue = searchValue.value


    const [allUser , setAllUser] = useState(null)

    var selectedData = null;


    if(!inputValue || inputValue.length === 0 || inputValue === ""){
        inputValue = "null";
    }

    
    if(inputValue !== "null"){
        if(allUser){
            const findUser = allUser.filter(user => user.FirstName.toLowerCase().includes(inputValue.toLowerCase()))
            selectedData = findUser;
        }
    }

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
             } catch (error) {}
        } 
        deleteOneUser()
    }

    const renderComponent = ()=> {
        let returnValue;
        if(selectedData !== null){
            returnValue = selectedData.map(user => (
                <UserProfileComponent key={user.id} user={user} deleteHandler={deleteHandler}/>
            ))
        }
        if(!selectedData || selectedData.length === 0 || selectedData===""){
            returnValue =(
                <div className={Styles.NoUser_parent}> 
                    <Link  to="/">نمایش همه‌ی کارمندان</Link>
                    <p >کارمندی با این اسم پیدا نشد</p>
                </div>
            )
        }
        return returnValue;

    }

    return (  
       <>
            <div style={{ with:'100%', height:"20px",}}></div>
            <div className={Styles.parent}>{renderComponent()}</div>
       </>
    );
}
 
export default Search;