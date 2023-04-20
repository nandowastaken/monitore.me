import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import "../styles/LoggedIn.css";

export default function LoggedIn(props) {
  return (
    <div className="LoggedIn">
      <img
        src="src/assets/addSchedule.svg"
        alt="Botão para adicionar horário."
        className="add-schedule-button"
        onClick={props.toggleCreateSchedule}
      />
      <div
        className="profile-picture"
        onClick={props.toggleMenu}
        style={{ backgroundImage: `url(${props.profileImageUrl})` }}
      ></div>
    </div>
  );
}
