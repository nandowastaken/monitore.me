import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";
import "../styles/Navbar.css";

export default function Navbar(props) {
  const [userPhoto, setUserPhoto] = useState("");

  return (
    <nav className="navbar">
      <Logo />

      <div className="profile-container">
        {props.isLoggedIn ? (
          <LoggedIn toggleMenu={props.toggleMenu} />
        ) : (
          <NotLoggedIn />
        )}
      </div>
    </nav>
  );
}
