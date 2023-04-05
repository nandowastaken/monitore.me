import "../styles/Profile.css";

export default function Profile() {
    return (
        <div className="Profile">
            <div className="profile-info-container">
                <div className="profile-img-container">
                    <div className="profile-img">
                    <button className="change-icon">
                        <img src="src/assets/camera-icon.svg" alt="" />
                    </button>
                    </div>
                    
                </div>
                
                <p className="profile-name">Fernando Jorge</p>
                <p className="profile-email">fernandojorge.cavalcantegomes@gmail.com</p>
                <button className="go-to-profile">Seu perfil</button>
            </div>

            <button className="leave-button">
                <div className="leave-content">
                    <img src="src/assets/leave-icon.svg" alt="" className="leave-icon" />
                    <p className="leave-text">Sair da conta</p>
                </div>
                
                </button>
        </div>
    )
}