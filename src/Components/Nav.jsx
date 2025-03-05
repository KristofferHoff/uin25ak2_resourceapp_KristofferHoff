import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <nav>
            <ul>
                <Link to="/html"><li>HTML</li></Link>
               <Link to="/css"><li>CSS</li></Link>
                <Link to="/JavaScript"><li>JavaScript</li></Link>
                <Link to="/React"><li>React</li></Link>
                <Link to="/Sanity"><li>Sanity</li></Link>
            </ul>
        </nav>
    );
}