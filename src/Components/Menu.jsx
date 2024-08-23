
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/Change.css";
import { PiGameControllerDuotone } from "react-icons/pi";
import { TbBrandTwitch } from "react-icons/tb";
import { TbLibraryPhoto } from "react-icons/tb";
import { MdOutlinePerson2 } from "react-icons/md";
import { PiPersonSimpleRunLight } from "react-icons/pi";
import { PiNewspaperLight } from "react-icons/pi";



const Menu = () => {
  return (
    <div className="flexbox">
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="me-auto">
            <Nav.Link href="/Newsletter" className="nav-link"><PiNewspaperLight className='custom-icons'/>Novinky</Nav.Link>
              <Nav.Link href="/About_me" className="nav-link"><PiPersonSimpleRunLight className='custom-icons'/>
              BIO</Nav.Link>
              <Nav.Link href="/Characters" className="nav-link"> <MdOutlinePerson2 className='custom-icons'/>
            Postavy</Nav.Link>
              <Nav.Link href="/Photogallery" className="nav-link"><TbLibraryPhoto className='custom-icons'/>
              Fotogalerie</Nav.Link>
              <Nav.Link href="/Twitch" className="nav-link"><TbBrandTwitch className='custom-icons'/>
              Twitch</Nav.Link>
              <Nav.Link href="/What_is_roleplay" className="nav-link">   <PiGameControllerDuotone className='custom-icons'/>Co je to RP?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;