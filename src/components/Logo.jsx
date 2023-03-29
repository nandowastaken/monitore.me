import { Link } from "react-router-dom";
import "../styles/Logo.css";

export default function Logo() {
    return (
        <Link to="/" className="logo-link">
            <h1 className="logo">
                Monitore.me
            </h1>
        </Link>

    )
}