import React, { useState } from "react";

import "../styles/CreateSchedule.css";
import ScheduleInfo from "./ScheduleInfo";

export default function CreateSchedule(props) {
  const [day, setDay] = useState("Segunda");

  const [segBeginHour, setSegBeghinHour] = useState("00:00");
  const [segEndHour, setSegEndHour] = useState("00:00");
  const [segLocalizacao, setSegLocalizacao] = useState("Ex: Lab 10 de Info.");
  const [segNotWorkDay, setSegNotWorkDay] = useState(false);

  const [terBeginHour, setTerBeghinHour] = useState("00:00");
  const [terEndHour, setTerEndHour] = useState("00:00");
  const [terLocalizacao, setTerLocalizacao] = useState("Ex: Lab 10 de Info.");
  const [terNotWorkDay, setTerNotWorkDay] = useState(false);

  const [quaBeginHour, setQuaBeghinHour] = useState("00:00");
  const [quaEndHour, setQuaEndHour] = useState("00:00");
  const [quaLocalizacao, setQuaLocalizacao] = useState("Ex: Lab 10 de Info.");
  const [quaNotWorkDay, setQuaNotWorkDay] = useState(false);

  const [quiBeginHour, setQuiBeghinHour] = useState("00:00");
  const [quiEndHour, setQuiEndHour] = useState("00:00");
  const [quiLocalizacao, setQuiLocalizacao] = useState("Ex: Lab 10 de Info.");
  const [quiNotWorkDay, setQuiNotWorkDay] = useState(false);

  const [sexBeginHour, setSexBeghinHour] = useState("00:00");
  const [sexEndHour, setSexEndHour] = useState("00:00");
  const [sexLocalizacao, setSexLocalizacao] = useState("Ex: Lab 10 de Info.");
  const [sexNotWorkDay, setSexNotWorkDay] = useState(false);

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
          localizacao={segLocalizacao}
          setLocalizacao={setSegLocalizacao}
          setBeginHour={setSegBeghinHour}
          setEndHour={setSegEndHour}
          NotWorkDay={segNotWorkDay}
          setNotWorkDay={setSegNotWorkDay}
        />
      ) : (
        <></>
      )}

      {day == "Terça" ? (
        <ScheduleInfo
          beginHour={terBeginHour}
          endHour={terEndHour}
          localizacao={terLocalizacao}
          setLocalizacao={setTerLocalizacao}
          setBeginHour={setTerBeghinHour}
          setEndHour={setTerEndHour}
          NotWorkDay={terNotWorkDay}
          setNotWorkDay={setTerNotWorkDay}
        />
      ) : (
        <></>
      )}

      {day == "Quarta" ? (
        <ScheduleInfo
          beginHour={quaBeginHour}
          endHour={quaEndHour}
          localizacao={quaLocalizacao}
          setLocalizacao={setQuaLocalizacao}
          setBeginHour={setQuaBeghinHour}
          setEndHour={setQuaEndHour}
          NotWorkDay={quaNotWorkDay}
          setNotWorkDay={setQuaNotWorkDay}
        />
      ) : (
        <></>
      )}

      {day == "Quinta" ? (
        <ScheduleInfo
          beginHour={quiBeginHour}
          endHour={quiEndHour}
          localizacao={quiLocalizacao}
          setLocalizacao={setQuiLocalizacao}
          setBeginHour={setQuiBeghinHour}
          setEndHour={setQuiEndHour}
          NotWorkDay={quiNotWorkDay}
          setNotWorkDay={setQuiNotWorkDay}
        />
      ) : (
        <></>
      )}

      {day == "Sexta" ? (
        <ScheduleInfo
          beginHour={sexBeginHour}
          endHour={sexEndHour}
          localizacao={sexLocalizacao}
          setLocalizacao={setSexLocalizacao}
          setBeginHour={setSexBeghinHour}
          setEndHour={setSexEndHour}
          NotWorkDay={sexNotWorkDay}
          setNotWorkDay={setSexNotWorkDay}
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
