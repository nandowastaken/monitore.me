import React, { useState } from "react";

import "../styles/CreateSchedule.css";

export default function CreateSchedule(props) {
  const [beginHour, setBeginHour] = useState();
  const [endHour, setEndHour] = useState();

  return (
    <div className="CreateSchedule">
      <div className="create-schedule-close">
        <img
          src="https://raw.githubusercontent.com/nandowastaken/icons-storage/a4f13def7f357c307ead6b23e13db31d546080dd/monitore-me/close.svg"
          alt="Fechar o cadastro de horário"
          onClick={props.toggleCreateSchedule}
        />
      </div>

      <h1 className="create-schedule-title">Cadastrar horário</h1>
      <div className="weekdays">
        <button className="weekdays-button">Segunda</button>
        <button className="weekdays-button">Terça</button>
        <button className="weekdays-button">Quarta</button>
        <button className="weekdays-button">Quinta</button>
        <button className="weekdays-button">Sexta</button>
      </div>

      <div className="select-time">
        <img
          src="https://raw.githubusercontent.com/nandowastaken/icons-storage/b5b79a1d86dc9e9bb142ced60ad90cda4086eba6/monitore-me/clock.svg"
          alt="Ícone de relógio."
        />
        <input
          type="time"
          className="time-input"
          onChange={(e) => setBeginHour(e.target.value)}
        />
        <input
          type="time"
          className="time-input"
          onChange={(e) => setEndHour(e.target.value)}
        />
      </div>

      <div className="other-info">
        <img
          src="https://raw.githubusercontent.com/nandowastaken/icons-storage/b8082858246c275b328c8ba7880ab74099fb68c4/monitore-me/location.svg"
          alt="Ícone de localização."
        />

        <input type="text" className="location" />

        <div className="dont-work-today">
          <input type="checkbox" className="dont-work-today-box" />
          <p className="dont-work-today-text">Não trabalho neste dia.</p>
        </div>
      </div>

      <div className="send-button-container">
        <button className="send-button">Enviar</button>
      </div>
    </div>
  );
}
