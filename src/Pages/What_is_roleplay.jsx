import Menu from "../Components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/role-play.css"
import Ninja from "../Images/Ninja2.webp";import FiveM from "../Images/FiveM.png"
import RedM from "../Images/RedM.png"
import { Link } from 'react-router-dom'; 
import '../Styles/Logo.css'

const What_is_roleplay = () => {
    return(
        <>
            <Menu />      
            <img src={Ninja} alt="logo" className="logo" />
            <div className="what-rp">
                <h3>Co je to RP?</h3>
                <p>Když slyšíte výraz role-playing nebo RP, možná si představíte hraní na hrdiny nebo divadelní představení. Pokud znáte alespoň trochu anglický jazyk, pak vám musí dojít, že role znamená roli a play znamená hrát. V doslovném překladu by to nedávalo moc smysl, proto se to může volně přeložit jako hraní v roli. Některé zdroje na internetu dokonce uvádějí význam role-playing games – hraní na hrdiny.</p>

                <h3>Moje zkušenosti s RP</h3>
                <p>V počítačových verzích her si můžeme představit RPG tématiku. Například mnou oblíbené MMORPG hry World of Warcraft či Lineage (které jsem už velice dlouho nehrál, protože na to není čas). Pokud bych to měl definovat vlastními slovy, hráči těchto her si zakládají postavu s vlastním jedinečným jménem (přezdívkou, nickem), vzhledem a rasou, kterou budou ve hře prezentovat. V průběhu hry se zaměřují na různá povolání a schopnosti, ať už lovecké nebo magické, vylepšují atributy postavy a plní různé příběhové mise. Později se mohou účastnit soupeření o moc nebo o konkrétní místa. V případě Lineage to dokonce byly i hrady. Sbírají také různé předměty, které jim doplňují různé magické poškození či základní útoky.</p>

                <p>Já osobně raději preferuji RPG, kde hra má nějaký lineární příběh s možností se rozhodovat a volit, jako byl legendární Star Wars: Knights of the Old Republic, na který rád vzpomínám dodnes. Z těch modernějších her je to pak Hogwarts Legacy, tentokrát s tématikou Harryho Pottera, která i přes veškeré negativní recenze, které jsem četl na internetu, mě nesmírně bavila.</p>

                <h3>Vlastní svět s originálním příběhem</h3>
                <p>Výše zmíněné hry jsou fajn, ale co teprve vlastní svět s originálním příběhem, nebo vymyslet příběh nový v existujícím světě? Tento způsob RP je pro mě snad ještě více zábavný než hry v předešlém odstavci. ORP (open role play) nebo Dungeons & Dragons (D&D) rozšiřuje hráčovu fantazii a nutí ho přemýšlet od jména postavy až po její nejskrytější touhy a nejtemnější strachy. Hráč je limitován pouze svou fantazií a schopností přemýšlet. Dle mého skromného názoru může hráč vymyslet cokoliv, co bude chtít, a může si vybrat roli, kterou bude v dané hře zastávat. Hlavní příběhovou linii řídí PJ – pán jeskyně, který určuje tempo příběhu. Hráči reagují svými příspěvky na jeho předem připravený příběh a vymýšlejí, co by jejich postavy udělaly. Příběh končí teprve tehdy, když je celý dohraný, nebo když PJ oznámí, že postava vlivem určitých situací zahynula.</p>

                <h3>Moje zkušenosti s RP na platformě FiveM</h3>
                <p>Od roku 2019 jsem začal působit na platformě FiveM, která je adaptací hry Grand Theft Auto V (zkráceně GTA V) od vývojářské společnosti Rockstar. Zde se příběhy různorodých postav odehrávají v republice San Andreas, konkrétně v Los Santos, které se nachází na území USA. Jedná se především o hraní reálného světa bez nadpřirozených vlastností. Můžete zde najít vozidla, mobilní telefony, letadla a také nespočet zážitků. Mezi můj primární a nejoblíbenější server patří právě Community Role-Play (zkráceně CMRP), kde působím jako admin a dohlížím na dodržování pravidel hráči či pomáhám s jejich problémy.</p>

                <p>Hrát zde můžete v rozdílných skupinách, ať už v legální sféře jako LSPD, EMS, FD, nebo majitel nějaké autodílny či podniku, nebo právě na opačné straně zákona. Potřebujete vydělat peníze? Můžete roznášet balíky, doplňovat benzín nebo pracovat v Cargo. Baví vás dělat nepořádek v ulicích? Pak jsou pro vás americké gangy to pravé.</p>

                <h3>Závěr</h3>
                <p>Pokud vás zaujalo alespoň prvních pár řádků a dočetli jste se až sem, můžete se podívat na náš web a následně vyplnit vstupní formulář. Po jeho vyhodnocení budete přizváni k ústnímu pohovoru z pravidel našeho serveru. Důležitou podmínkou je mít originální verzi hry a následně nainstalovanou adaptaci FiveM.</p> 
                <p>Po kliknutí na obrázek můžete navštívit web CMRP a také stránky o FiveM, kde se dozvíte více o této adaptaci a můžete stáhnout launcher pro jejich platformu!</p>
                
             
                <div className="logo-container">
  <Link to="https://fivem.communityportal.cz/">
    <img src={FiveM} alt="FiveM logo" className="FiveM" loading="lazy" />
  </Link>
  <Link to="https://redm.communityportal.cz/">
    <img src={RedM} alt="RedM logo" className="RedM" loading="lazy"/>
  </Link>
</div>
                
            </div>
            <footer>
                <p className="text-4">© 2024 Copyright: JustOnlySho</p>
            </footer>
        </>
    )
}

export default What_is_roleplay;