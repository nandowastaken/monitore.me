import "../styles/ChangePicture.css";

export default function ChangePicture(props) {
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
        <div className="profile-picture-change-img"></div>
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
