import Menu from "../Components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import Ninja from "../Images/Ninja2.webp";

const Characters = () => {
    return(
        <>
        <Menu />
        <img src={Ninja} alt="logo" className="logo" loading="lazy" />

        <h1>This is page about characters</h1>
        <p>Characters are the most important part of the game</p>
        </>
    )
}

export default Characters;