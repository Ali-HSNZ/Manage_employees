import Styles from './Header.module.css' 
const Header = () => {
    return (
        <div className={Styles.parent}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={Styles.HeaderSvg} preserveAspectRatio="none"><path fill="#0099ff"  d="M0,96L48,117.3C96,139,192,181,288,165.3C384,149,480,75,576,74.7C672,75,768,149,864,181.3C960,213,1056,203,1152,165.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    );
}
 
export default Header;