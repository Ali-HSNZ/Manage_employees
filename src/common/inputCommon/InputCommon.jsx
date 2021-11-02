import Styles from './inputCommon.module.css'



const InputCommon = ({formik,name,text,type,placeholder , changeHandler}) => {



    return (  
        <div className={Styles.input_p_Parent}>

            <div className={Styles.input_p_Parent_row}>
                <input 
                    dir="rtl" 
                    onBlur={formik.handleBlur} 
                    value={formik.values[name]} 
                    name={name} 
                    type={type} 
                    onChange={changeHandler || formik.handleChange} 
                    placeholder={placeholder} 
                    className={`${Styles["input_"+name]}`}
                />
                <p dir="rtl">{text} : </p>
            </div>

            {formik.errors[name] && formik.touched[name] && (
                <span dir="rtl" className={Styles.error}>{formik.errors[name]}</span>
            )}

        </div>
    );
}
 
export default InputCommon;