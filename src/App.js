const { render } = require("react-dom");
import Nav from "./Nav";
import Intro from "./Intro";

const App = () =>{
    return(
        <div>
            <Nav />
        <Intro />
        </div>
        
    );
}

render(<App/>, document.getElementById("root"));