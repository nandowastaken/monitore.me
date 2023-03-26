import "../styles/LoggedIn.css";

export default function LoggedIn() {
  return (
    <div className="LoggedIn">
      <img
        src="src/assets/addSchedule.svg"
        alt="Botão para adicionar horário."
        className="add-schedule-button"
      />
      <div className="profile-picture"></div>
    </div>
  );
}
