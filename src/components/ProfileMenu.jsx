import React from "react";
import "../styles/ProfileMenu.css";

export default function ProfileMenu(props) {
  const leaveAccount = () => {
    localStorage.setItem("token", "");
    location.reload();
  };

  return (
    <div
      className="ProfileMenu"
      style={{ display: props.isVisible ? "flex" : "none" }}
    >
      <div className="profile-menu-info-container">
        <div className="profile-menu-img-container">
          <div
            className="profile-menu-img"
            style={{ backgroundImage: `url(${props.monitor.foto})` }}
          >
            <button className="change-icon" onClick={props.toggleChangePicture}>
              <img src="src/assets/camera-icon.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="name-email-container">
          <p className="profile-menu-name">{props.monitor.nome}</p>
          <p className="profile-menu-email">{props.monitor.email}</p>
        </div>

        <button className="go-to-profile">Seu perfil</button>
      </div>

      <button className="leave-button">
        <div className="leave-content" onClick={leaveAccount}>
          <img src="src/assets/leave-icon.svg" alt="" className="leave-icon" />
          <p className="leave-text">Sair da conta</p>
        </div>
      </button>
    </div>
  );
}
