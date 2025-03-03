import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <nav>
            <ul>
                <li><Link to="/html">HTML</Link></li>
                <li><Link to="/css">CSS</Link></li>
                <li><Link to="/JavaScript">JavaScript</Link></li>
                <li><Link to="/React">React</Link></li>
                <li><Link to="/Sanity">Sanity</Link></li>
            </ul>
        </nav>
    );
}