import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import "../styles/ChangePicture.css";

export default function ChangePicture(props) {
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
    <div className="ChangePicture">
      <div className="close">
        <i
          className="material-icons md-48 close-icon"
          onClick={props.toggleChangePicture}
        >
          close
        </i>
      </div>
      <h1 className="app-title">Monitore.me</h1>

      <div className="profile-picture-explanation">
        <p className="profile-picture-explanation-title">Foto de perfil</p>
        <p className="profile-picture-explanation-description">
          Sua foto de perfil pode ajudar os alunos do campus a reconhecer você
          na monitoria.
        </p>
      </div>

      <div className="profile-picture-change">
        <div
          className="profile-picture-change-img"
          style={{ backgroundImage: `url(${profileImageUrl})` }}
        ></div>
        <div className="profile-picture-change-buttons">
          <button className="profile-picture-change-button">
            <i className="material-icons md-48">edit</i>
            Mudar
          </button>

          <button className="profile-picture-change-button">
            <i className="material-icons md-48">delete</i>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}
