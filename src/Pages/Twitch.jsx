import Menu from "../Components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import Ninja from "../Images/Ninja2.webp";
const Twitch = () => {
    return(
        <>
        <Menu />
        <img src={Ninja} alt="logo" className="logo" loading="lazy" />

        <h1>Zdarec paskřivec</h1>
        </>
    )
}

export default Twitch;