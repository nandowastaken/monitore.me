import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import "../styles/LoggedIn.css";

export default function LoggedIn(props) {
  const [profileImageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;

    fetch(`http://localhost:8080/monitores/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(setProfileImageUrl(data[0].foto));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="LoggedIn" onClick={props.toggleMenu}>
      <img
        src="src/assets/addSchedule.svg"
        alt="Botão para adicionar horário."
        className="add-schedule-button"
      />
      <div
        className="profile-picture"
        style={{ backgroundImage: `url(${profileImageUrl})` }}
      ></div>
    </div>
  );
}
