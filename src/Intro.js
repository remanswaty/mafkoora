import LazyLoad from "react-lazy-load";
import MainLogo from "../public/img/Main-logo.png";
import placeholderImage from '../public/img/placeholder-image.jpg';

const Intro = () => {
    return (
        <div className="intro">
            <h2>Evolving the Nation through Education, Literature & Theatre/Arts</h2>
            <div>
            <p>Founded in June 2020, (registered under ‘Societies Act XXI of 1860 in the Office of the Provincial Registrar Joint Stock Companies and Societies, Khyber Pakhtunkhwa), Mafkoora Research & Development Centre is a Peshawar based scholastic organization committed to accumulate glocal knowledge, inspire indigenous wisdom, encourage creative artisanship, and promote critical thinking, disseminating all such academic and cultural ventures through education and training, art and literature, dialogue and theatre.</p>
                <LazyLoad offset={200} debounce={false} once={true}>
                    <img src={MainLogo}></img>
                </LazyLoad>
            </div>
            <div className="line"></div>
        </div>
    );

}
export default Intro;