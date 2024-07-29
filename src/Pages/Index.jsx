import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitch, FaGithub  } from "react-icons/fa";
import '../Styles/Index.css'

const Index = () => {
  return (
    <div className="index-body">
      <header>
        <img
          className="little-change" src="https://lanyard.cnrad.dev/api/558342851897851924?theme=dark&bg&idleMessage=&borderRadius=0px"
          alt="Profile"
        />

        <div className="social-icons-container">
          <a href="https://www.instagram.com" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/mazal2" className="social-icon">
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-mazal-3208a6245/"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a href="/" className="social-icon">
            <FaTwitch />
          </a>

          <a href="/" className="social-icon">
            <FaGithub />
          </a>
        </div>
      </header>
      <div className="welcome-website">
        <p>
          Zdravíčko, návštěvníku. Díky, že si zavítal na moje osobní webové
          stránky, které nebudou v této fázi zaměřené pouze na mé porftolio, ale
          hlavním tématem bude to, co ve skutečnosti mám rád ze všeho nejraději.
          Tím je tvorba různých příběhů, příběhových postav v různých světech s
          tématikou RP!
          <br /> <br />
          Na stránkách také najdeš mnoho informací o serverech, kde se chystám
          hrát, nebo aktuálně hraji RP. Nalzneš zde kontaky ke spojení na můj
          Discord, Facebook, LinkedIN, ale také Twitch, kde příležitostně
          streamuji. Dozvíte se taktéž o postavách, které jsem v minulosti hrál
          na různých serverech, ale také příběhy těch aktuálních. <br /> <br />
          Web je programován v Reactu, pokud narazíte na nějaké chyby, neváhejte
          mě kontaktovat na Discordu. Pro více informací klikni na odkaz <Link className="change-link" to ="/Newsletter">zde!</Link>
        </p>
      </div>
    </div>
  );
};

export default Index;
