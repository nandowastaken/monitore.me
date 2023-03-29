import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhoto, setUserPhoto] = useState("");

  const checkTokenValidity = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await fetch("http://localhost:8080/welcome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <nav className="navbar">
      <Logo/>
      

      <div className="profile-container">
        {isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}
      </div>
    </nav>
  );
}
