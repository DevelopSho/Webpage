import Menu from "../Components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import Ninja from "../Images/Ninja2.webp";
import '../Styles/Logo.css'
const Photogallery = () => {
    return (
        <>
        <Menu />
        <img src={Ninja} alt="logo" className="logo" loading="lazy" />
        <h1>And This is photogallery</h1>
        </>
    )
}

export default Photogallery;