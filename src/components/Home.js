
import "../styles/home.css"
function genRandom() {
    return Math.floor(Math.random() * 84523);
}

export default function Home(){
    return(
        <div className="WelcomeUser">
            <div className="subheading">
                <h1 className="appTitle"><b>The Voting Range</b></h1>
                <p>Created by Dhevish P</p>
            </div>        
        </div>        
    )
}