import React, { useState, useEffect } from "react";
import "../styles/Homepage.css";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import ProfileMenu from "../components/ProfileMenu";
import Schedule from "../components/Schedule";
import ChangePicture from "../components/ChangePicture";
import MonitorProfile from "../components/MonitorProfile";
import CreateSchedule from "../components/CreateSchedule";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChangePictureOpen, setIsChangePictureOpen] = useState(false);
  const [visibleHeader, setVisibleHeader] = useState("true");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shift, setShift] = useState("matutino");

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function toggleChangePicture() {
    setIsChangePictureOpen(!isChangePictureOpen);
  }

  function toggleHeader() {
    setVisibleHeader(false);
  }

  const handleSearch = (e) => {
    e.preventDefault();
  };

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
    <div className="Homepage">
      <Navbar toggleMenu={toggleMenu} isLoggedIn={isLoggedIn} />
      <div className="profile-menu-container">
        <ProfileMenu
          isVisible={isMenuOpen}
          toggleChangePicture={toggleChangePicture}
        />
      </div>

      <div
        className="change-profile-picture-container"
        style={{ display: isChangePictureOpen ? "flex" : "none" }}
      >
        <div className="black-screen"></div>
        <ChangePicture
          toggleChangePicture={toggleChangePicture}
          isVisible={isChangePictureOpen}
        />
      </div>

      <div className={visibleHeader ? "search" : "search active"}>
        <div className={visibleHeader ? "header" : "NotVisible"}>
          <h2 className="search-title">
            Pesquise o horário do seu monitor aqui!
          </h2>
          <p className="search-paragraph">Basta preencher os campos abaixo!</p>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="labelContainer">
            <label htmlFor="materia" className="label">
              Matéria
            </label>
            <select name="materia" id="materia" className="select-box">
              <option value="blank"></option>
              <option value="inpg">Introdução à Programação</option>
            </select>
          </div>

          <div className="labelContainer">
            <label htmlFor="curso" className="label">
              Curso
            </label>
            <select name="curso" id="curso" className="select-box">
              <option value="blank"></option>
              <option value="inpg">Desenvolvimento de Sistemas</option>
            </select>
          </div>

          <div className="labelContainer">
            <label htmlFor="turno" className="label">
              Turno
            </label>
            <select
              name="turno"
              id="turno"
              className="select-box"
              onChange={(e) => setShift(e.target.value)}
            >
              <option value="blank"></option>
              <option value="matutino">Matutino</option>
              <option value="vespertino">Vespertino</option>
            </select>
          </div>

          <button
            type="submit"
            className="search-button"
            onClick={toggleHeader}
          >
            Pesquisar
          </button>
        </form>

        <Schedule visibleHeader={visibleHeader} shift={shift} />
      </div>

      <Footer />
    </div>
  );
}
