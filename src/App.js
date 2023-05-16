const { render } = require("react-dom");
import Nav from "./Nav";
import Intro from "./Intro";
import Footer from "./Footer";
import PageSection from "./PageSection";
import MukalimaLogo from "../public/img/Logo-Mukaalima.png";
import RanabanLogo from "../public/img/Logo-Ranaban.png";
import GathaLogo from "../public/img/Logo-Gatha.png";

const App = () =>{
    return(
        <div>
            <Nav />
            <Intro />
            <PageSection
                bgColor="pink"
                title="MUKAALIMA"
                description="Mafkoora commenced its first bimonthly debate/ colloquium, Muakaalima at Mafkoora on November 19, 2020. Held on every second Thursday of a month, Mukaalima provides an intellectual delight for the young scholars to interact with great minds, maestros, and compassionate hearts of diverse schools. Appreciated largely in the academic circles, Mukaalima offers a most inspiring arena for scholastic and argumentative dialogues.
                Mafkoora has organized and recorded thirty nine (39) Mukaalimas till date, and can be watched on its youtube channel, Mafkoora."
                image={MukalimaLogo}
                id="mukaalima"
            />
            {/* <br /> */}
            <PageSection 
                bgColor="yellow"
                title="RANABAN"
                description="Launched in March 2022, Ranaban a Pashto Monthly for the children, for the promotion of Pashto language and literature. The magazine aims at educating the youth on the Pashto orthography, orthoepy, lexicology, and counting, as well as the knowledge of Pashtun history, geography and indigenous wisdom."
                image={RanabanLogo}
                id="ranaban"
            />
            {/* <br /> */}
            <PageSection 
                bgColor="grey"
                title="GATHA"
                description="‘Gatha’ offers a stage for both live and recorded theatres, including monologues, dialogues, trilogues, drama, films, telefilms, song-based skits and all such performances with an imperative of art and progress. ‘Gatha’ also provides training opportunities in the relevant areas of performing art such as script writing, direction, acting, musicology, singing and stage performances."
                image={GathaLogo}
                id="gatha"
            />
            {/* <br /> */}
            <Footer />
        </div>
        
    );
}

render(<App/>, document.getElementById("root"));