import Menu from "../Components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import Ninja from "../Images/Ninja2.webp";
import '../Styles/Logo.css';
const Twitch = () => {
    return(
        <>
        
        <Menu />
        <img src={Ninja} alt="logo" className="logo" loading="lazy" />

        <h1>Commin soon</h1>
     
        </>
    )
}

export default Twitch;