import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <nav>
            <ul>
                <li><link to="/html">HTML</link></li>
                <li><link to="/css">CSS</link></li>
                <li><link to="/JavaScript">JavaScript</link></li>
                <li><link to="/React">React</link></li>
                <li><link to="/Sanity">Sanity</link></li>
            </ul>
        </nav>
    );
}