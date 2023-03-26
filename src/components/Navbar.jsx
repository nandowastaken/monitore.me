import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userPhoto, setUserPhoto] = useState("");

  function checkLoginStatus() {}

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        monitoria-agenda.com
      </Link>

      <div className="profile-container">
        {isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}
      </div>
    </nav>
  );
}
