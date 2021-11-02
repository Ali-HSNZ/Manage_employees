import React from 'react';
import postAUser from '../../http/post/post';
import Styles from './AddUser.module.css'
import { toast} from 'react-toastify';
import {useFormik } from 'formik';
import * as Yup from 'yup';
import InputCommon from '../../commons/inputCommon/InputCommon'

const initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    birthDay: "",
    codeMeli: "",
    sabegheKar: "",
    Duty: "",
    shoglGhabli: "",
    hoghogh: "",
}

const firstNameRegExp = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ]{3,15}$/
const lastNameRegExp = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ]{3,30}$/
const sabegheKarRegExp = /^([0-9]){0,2}$/
const phoneRegExp = /^(?:98|\+98|0098|0)?9[0-9]{9}$/
const birthDayRegExp = /^$|^([1۱][۰-۹ 0-9]{3}[/\/]([0 ۰][۱-۶ 1-6])[/\/]([0 ۰][۱-۹ 1-9]|[۱۲12][۰-۹ 0-9]|[3۳][01۰۱])|[1۱][۰-۹ 0-9]{3}[/\/]([۰0][۷-۹ 7-9]|[1۱][۰۱۲012])[/\/]([۰0][1-9 ۱-۹]|[12۱۲][0-9 ۰-۹]|(30|۳۰)))$/
const codeMeliRegExp = /^([0-9]){10}$/
const DutyRegExp = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ]{2,15}$/
const shoglGhabliRegExp =/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ]{2,15}$/
const hoghoghRegExp = /^([0-9]){6,8}$/


const validationSchema = Yup.object({
    FirstName : Yup.string().required("نام را وارد کنید").matches(firstNameRegExp,"نام را به فارسی وارد کنید (3 تا 15 حرف)"),
    LastName : Yup.string().required("نام خانوادگی وارد کنید").matches(lastNameRegExp,"نام خانوادگی را به فارسی وارد کنید (3 تا 30 حرف)"),
    email: Yup.string().email("ایمیل را به درستی وارد کنید").required("ایمیل را وارد کنید"),
    phoneNumber : Yup.string().required("شماره موبایل وارد کنید").matches(phoneRegExp , "شماره موبایل معتبر نیست"),
    birthDay : Yup.string().required("تاریخ تولد وارد کنید").matches(birthDayRegExp,"تاریخ تولد معتبر نیست (به فرمت yyyy/mm/dd وارد کنید)"),
    codeMeli : Yup.string().required("کد ملی را وارد کنید").matches(codeMeliRegExp,"کد ملی معتبر نیست"),
    sabegheKar : Yup.string().required("سابقه کار را وارد کنید").matches(sabegheKarRegExp,"سابقه کار معتبر نیست (0 تا 99 سال)"),
    Duty:Yup.string().required("مسئولیت را وارد کنید").matches(DutyRegExp,"مسئولیت را به فارسی وارد کنید (2 تا 15 حرف)"),
    shoglGhabli:Yup.string().required("شغل قبلی را وارد کنید").matches(shoglGhabliRegExp,"شغل قبلی خود را به فارسی وارد کنید (2 تا 15 حرف)"),
    hoghogh : Yup.string().required("حقوق را وارد کنید").matches(hoghoghRegExp , " حقوق را به انگلیسی وارد کنید (100,000 تا 99,000,000) تومان")
})




const AddUser = (props) => {


    const onSubmit = async()=> {

        try {
            await postAUser(formik.values)
            toast.success(` کارمند : ${formik.values.FirstName} ${formik.values.LastName}   ثبت شد`)
            props.history.push("/")
            
        } catch (error) { alert(error)}
           
        
     
    }
    
    
    const formik =useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount : true
    })


    const inputCommonList={
        right: [
            {name : "FirstName" , text : "نام" , type : "text" , placeholder : "به فارسی وارد کنید"},
            {name : "LastName" , text : "نام خانوادگی" , type : "text" , placeholder : "به فارسی وارد کنید"},
            {name : "email" , text : "ایمیل" , type : "text" , placeholder : "ایمیل خود را وارد کنید"},
            {name : "phoneNumber" , text : "شماره همراه" , type : "number" , placeholder : "شماره تماس خود را وارد کنید"},
            {name : "birthDay" , text : "تاریخ تولد" , type : "text" , placeholder : "yyyy/mm/dd"},
        ],left : [
            {name : "codeMeli" , text : "کد ملی" , type : "number" , placeholder : "گد ملی خود را وارد کنید"},
            {name : "sabegheKar" , text : "سابقه کار" , type : "number" , placeholder : "0-99"},
            {name : "Duty" , text : "مسئولیت" , type : "text" , placeholder : "مسئولیت کنونی خود را وارد کنید"},
            {name : "shoglGhabli" , text : "شغل قبلی" , type : "number" , placeholder : "شغل قبلی خود را وارد کنید"},
            {name : "hoghogh" , text : "حقوق خود را وارد کنید" , type : "number" , placeholder : "100,000 - 1,000,000"},
        ]
    }



    return (  
      
            <form onSubmit={formik.handleSubmit}>

                <div className={Styles.header}>
                    <div>
                        <button type="submit" disabled={!formik.isValid} title={!formik.isValid ? "لطفا مقادیر خواسته شده را وارد کنید" : ""}  className={Styles.headerSubmitBtn}>ثبت</button>
                        <button onClick={()=>props.history.push('/')} className={Styles.headerGoBackBtn}>برگشت</button>
                    </div>
                    <p dir="rtl">ثبت کارمند جدید : </p>
                </div>

                <div className={Styles.parent}>
                    <div className={Styles.inputsParent}>
                        {inputCommonList.left.map((item , index)=> <InputCommon key={index} formik={formik} {...item}/>)}
                    </div>
                    <div className={Styles.inputsParent}>
                        {inputCommonList.right.map((item , index)=> <InputCommon key={index} formik={formik} {...item}/>)}
                    </div>
                </div>

            </form>
     
    );
  
}
 
export default AddUser;