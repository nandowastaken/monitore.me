import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import "../styles/ProfileMenu.css";

export default function ProfileMenu(props) {
  const [profileImageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;

      fetch(`http://localhost:8080/monitores/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(setProfileImageUrl(data[0].foto));
        })
        .catch((error) => console.error(error));
    } catch {
      console.log("It is not visible");
    }
  }, []);

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
            style={{ backgroundImage: `url(${profileImageUrl})` }}
          >
            <button className="change-icon" onClick={props.toggleChangePicture}>
              <img src="src/assets/camera-icon.svg" alt="" />
            </button>
          </div>
        </div>

        <p className="profile-menu-name">Fernando Jorge</p>
        <p className="profile-menu-email">
          fernandojorge.cavalcantegomes@gmail.com
        </p>
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
