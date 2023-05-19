const { render } = require("react-dom");
import Nav from "./Nav";
import Intro from "./Intro";
import Footer from "./Footer";
import PageSection from "./PageSection";
import MukalimaLogo from "../public/img/Logo-Mukaalima.png";
import RanabanLogo from "../public/img/Logo-Ranaban.png";
import GathaLogo from "../public/img/Logo-Gatha.png";

import ranaban1 from "../public/img/ranaban1.png";
import ranaban2 from "../public/img/ranaban2.png";
import ranaban3 from "../public/img/ranaban3.png";
import ranaban4 from "../public/img/ranaban4.png";
import ranaban5 from "../public/img/ranaban5.png";
import ranaban6 from "../public/img/ranaban6.png";

import mukaalima1 from "../public/img/mukaalima1.png";
import mukaalima2 from "../public/img/mukaalima2.png";
import mukaalima3 from "../public/img/mukaalima3.png";
import mukaalima4 from "../public/img/mukaalima4.png";
import mukaalima5 from "../public/img/mukaalima5.png";
import mukaalima6 from "../public/img/mukaalima6.png";

import gatha1 from "../public/img/gatha1.png";
import gatha2 from "../public/img/gatha2.png";
import gatha3 from "../public/img/gatha3.png";
import gatha4 from "../public/img/gatha4.png";
import gatha5 from "../public/img/gatha5.png";
import gatha6 from "../public/img/gatha6.png";

const App = () =>{
    const ranabanImages = [ranaban3, ranaban2, ranaban1, ranaban4, ranaban5, ranaban6];
    const mukaalimaImages = [mukaalima1, mukaalima2, mukaalima3, mukaalima4, mukaalima5, mukaalima6];
    const gathaImages = [gatha1, gatha2, gatha3, gatha4, gatha5, gatha6];
    return(
        <div className="app">
            <Nav />
            <Intro />
            <PageSection
                title="MUKAALIMA"
                description="Mafkoora commenced its first bimonthly debate/ colloquium, Muakaalima at Mafkoora on November 19, 2020. Held on every second Thursday of a month, Mukaalima provides an intellectual delight for the young scholars to interact with great minds, maestros, and compassionate hearts of diverse schools. Appreciated largely in the academic circles, Mukaalima offers a most inspiring arena for scholastic and argumentative dialogues.
                Mafkoora has organized and recorded thirty nine (39) Mukaalimas till date, and can be watched on its youtube channel, Mafkoora."
                image={MukalimaLogo}
                id="mukaalima"
                images={mukaalimaImages}
            />
            
            <PageSection 
                title="RANABAN"
                description="Launched in March 2022, Ranaban a Pashto Monthly for the children, for the promotion of Pashto language and literature. The magazine aims at educating the youth on the Pashto orthography, orthoepy, lexicology, and counting, as well as the knowledge of Pashtun history, geography and indigenous wisdom."
                image={RanabanLogo}
                id="ranaban"
                images = {ranabanImages}
            />
            <div className="gradient"/>
            <PageSection 
                title="GATHA"
                description="‘Gatha’ offers a stage for both live and recorded theatres, including monologues, dialogues, trilogues, drama, films, telefilms, song-based skits and all such performances with an imperative of art and progress. ‘Gatha’ also provides training opportunities in the relevant areas of performing art such as script writing, direction, acting, musicology, singing and stage performances."
                image={GathaLogo}
                id="gatha"
                images={gathaImages}
            />
            <div className="gradient"/>
            <Footer />
        </div>
        
    );
}

render(<App/>, document.getElementById("root"));