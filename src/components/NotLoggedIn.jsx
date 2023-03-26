import "../styles/NotLoggedIn.css";

export default function NotLoggedIn() {
  return (
    <div className="NotLoggedIn">
      <img src="src/assets/Profile.svg" alt="" className="profileIcon" />
      <p className="notLoggedInMessage">Entrar como monitor.</p>
    </div>
  );
}
