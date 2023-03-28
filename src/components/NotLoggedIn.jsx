import { Link } from "react-router-dom";
import "../styles/NotLoggedIn.css";

export default function NotLoggedIn() {
  return (
    <Link to="/login" className="Link">
      <div className="NotLoggedIn">
        <img src="src/assets/Profile.svg" alt="" className="profileIcon" />

        <p className="notLoggedInMessage">Entrar como monitor</p>
      </div>
    </Link>
  );
}
