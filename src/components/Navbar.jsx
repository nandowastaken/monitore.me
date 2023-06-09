import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";
import "../styles/Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <Logo />

      <div className="profile-container">
        {props.isLoggedIn ? (
          <LoggedIn
            toggleMenu={props.toggleMenu}
            toggleCreateSchedule={props.toggleCreateSchedule}
            profileImageUrl={props.profileImageUrl}
          />
        ) : (
          <NotLoggedIn />
        )}
      </div>
    </nav>
  );
}
