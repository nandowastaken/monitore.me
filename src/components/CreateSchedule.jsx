import React, { useState } from "react";

import "../styles/CreateSchedule.css";
import ScheduleInfo from "./ScheduleInfo";

export default function CreateSchedule(props) {
  const [day, setDay] = useState("Segunda");

  const [segBeginHour, setSegBeghinHour] = useState("00:00");
  const [segEndHour, setSegEndHour] = useState("00:00");

  const [terBeginHour, setTerBeghinHour] = useState("00:00");
  const [terEndHour, setTerEndHour] = useState("00:00");

  const [quaBeginHour, setQuaBeghinHour] = useState("00:00");
  const [quaEndHour, setQuaEndHour] = useState("00:00");

  const [quiBeginHour, setQuiBeghinHour] = useState("00:00");
  const [quiEndHour, setQuiEndHour] = useState("00:00");

  const [sexBeginHour, setSexBeghinHour] = useState("00:00");
  const [sexEndHour, setSexEndHour] = useState("00:00");

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
        <button className="weekdays-button" onClick={() => setDay("Segunda")}>
          Segunda
        </button>

        <button className="weekdays-button" onClick={() => setDay("Terça")}>
          Terça
        </button>

        <button className="weekdays-button" onClick={() => setDay("Quarta")}>
          Quarta
        </button>

        <button className="weekdays-button" onClick={() => setDay("Quinta")}>
          Quinta
        </button>

        <button className="weekdays-button" onClick={() => setDay("Sexta")}>
          Sexta
        </button>
      </div>

      {day == "Segunda" ? (
        <ScheduleInfo
          beginHour={segBeginHour}
          endHour={segEndHour}
          setBeginHour={setSegBeghinHour}
          setEndHour={setSegEndHour}
        />
      ) : (
        <></>
      )}

      {day == "Terça" ? (
        <ScheduleInfo
          beginHour={terBeginHour}
          endHour={terEndHour}
          setBeginHour={setTerBeghinHour}
          setEndHour={setTerEndHour}
        />
      ) : (
        <></>
      )}

      {day == "Quarta" ? (
        <ScheduleInfo
          beginHour={quaBeginHour}
          endHour={quaEndHour}
          setBeginHour={setQuaBeghinHour}
          setEndHour={setQuaEndHour}
        />
      ) : (
        <></>
      )}

      {day == "Quinta" ? (
        <ScheduleInfo
          beginHour={quiBeginHour}
          endHour={quiEndHour}
          setBeginHour={setQuiBeghinHour}
          setEndHour={setQuiEndHour}
        />
      ) : (
        <></>
      )}

      {day == "Sexta" ? (
        <ScheduleInfo
          beginHour={sexBeginHour}
          endHour={sexEndHour}
          setBeginHour={setSexBeghinHour}
          setEndHour={setSexEndHour}
        />
      ) : (
        <></>
      )}

      <div className="send-button-container">
        <button className="send-button">Enviar</button>
      </div>
    </div>
  );
}
