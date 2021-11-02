import Navigation from "../Components/Navigation/Navigation";
import Header from "./Header/Header";
import Styles from './Layout.module.css'

const Layout = ({children}) => {
    return (   <>

        <div className={Styles.parent}>
            <div className={Styles.parentCenter}>
               
                <Header/>
                <Navigation/>
                    <div className={Styles.main}>
                        {children}
                    </div>
            </div>
        </div>
    </>);  
}
 
export default Layout;