import Menu from "../Components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/About-me.css"
import Ninja from "../Images/Ninja.webp"

const AboutMe = () => {
    return (
        <>
            <Menu />
            <img src={Ninja} alt="logo" className="logo" />
            <div className="about-me">
                <h3 className="color-h-1">Kdo jsem?</h3>
                <p className="text-1"> <br />
                    Zdravíčko návštěvníku, <br />

                    vítej na mých prvních webových stránkách, které jsem si založil pro účely osobního rozvoje a vzdělávání v oblasti IT technologií, zejména v kódování a stylizování webu, ale i plnohodnotného programovacího jazyka JavaScript. Kódovat jsem se učil už jako dítě, ale víme, jak to dopadá, když se děti pro něco nadchnou, ale pak je to opustí. Teprve před rokem jsem se k tomu vrátil a začal téměř od znovu.<br /><br />

                    Tedy skoro od znovu. Myslím si, že nějaké základy zvládne každý, kdo se alespoň trochu pohybuje na internetu a má schopnost zdravého úsudku, chuť a nějakou vytrvalost se k tomu něco naučit. Tedy myslím, že to tak je. Minimálně tomu bylo u mně stejně.<br /><br />

                    Krátce o mně. Jmenuji se Martin a bydlím v Jihomoravském kraji, kdy příští rok dovrším 34 let. Jsem vášnivím hráčem MOBA hry League of Legends, FPS hry jménem Valorant, ale mezi mé nejoblíbenější styl her patří Role-Play (zkráceně RP) na platformě FiveM hry Grand Theft Auto V od známé vývojařské společnosti Rockstaru, konkrétně serveru CMRP, jehož odkaz naleznete zde!. Také streamuji občas na platformě Twitch už možná třetím rokem. Jsem též věrným fanouškem Hunger Games, ale také Harryho Pottera, který vyšel přesně v mých 11ti letech. 
                </p>
                
                <h3 className="color-h-2">Moje PC sestava:</h3>
                <p className="text-2">
                    Case: Asus TUF Gaming GT301 <br />
                    MB: ASRock X670E Steel Legend <br />
                    SSD: Samsung 980 PRO 1TB <br />
                    Chladič: Endorfy Fera 5 ARGB <br />
                    GPU: Gigabyte GeForce RTX 4070 Windforce OC 12 GB <br />
                    CPU: AMD Ryzen 7 7800X3D <br />
                    RAM: Kingston Fury Beast Black EXPO 32GB 5200MHz<br />
                    Zdroj: Seasonic FOCUS GX-650W<br />
                </p>

                <h3 className="color-h-3">Oblíbená hudba?</h3>
                <p className="text-3">Jsem člověk, který rád poslouchá hudbu. Možná asi jako každý jiný. Mezi můj oblíbený hudební žánr patří pochopitelně moderní hudba, ale zejména vše, co se točí alespoň okolo rapu a hip-hopu. Nemine jeden den, abych si v autě nepustil nějakou písničku a neužíval si cestu při řízení s hlasitostí podle mamky: 
                    zeslab-to-na-minimum-máš-to-ohulený-na-plný-koule.
                </p>
                        
                <div className="posunuti">
                    <iframe className="responsive" width="400" height="215" src="https://www.youtube.com/embed/kpMFBhjNziQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                
                    <iframe className="responsive" width="400" height="215" src="https://www.youtube.com/embed/3f9aAyuVbD8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    <iframe className="responsive" width="400" height="215" src="https://www.youtube.com/embed/3f9aAyuVbD8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                </div>
                <footer>
                    <p className="text-4">© 2024 Copyright: JustOnlySho</p>
                </footer>
           
        </>
    );
}

export default AboutMe;