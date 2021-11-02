import { Link } from 'react-router-dom';
import Styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (  
        <>
            <div className={Styles.parent}>
                <div>
                    <Link class={Styles.goBackBtn} to="/"><i class="icon-home"></i> صفحه اصلی</Link>
                </div>
                <h1 className={Styles.Header}>404</h1>
                <p dir="rtl" className={Styles.Title}>صفحه مورد نظر پیدا نشد.</p>

            </div>
        </>
    );
}
 
export default NotFoundPage;