import React, { useState, useRef } from "react";
import "../styles/Homepage.css";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import Schedule from "../components/Schedule";
import ChangePicture from "../components/ChangePicture";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChangePictureOpen, setIsChangePictureOpen] = useState(false);
  const [visibleHeader, setVisibleHeader] = useState("true");

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

  return (
    <div className="Homepage">
      <Navbar toggleMenu={toggleMenu} />
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
        <ChangePicture toggleChangePicture={toggleChangePicture} />
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
            <select name="turno" id="turno" className="select-box">
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

        <Schedule visibleHeader={visibleHeader} />
      </div>
    </div>
  );
}
