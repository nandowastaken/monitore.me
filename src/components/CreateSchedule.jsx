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

  function deactivateButtons(event) {
    const id = event.target.id;

    // Removes the element that is clicking to remove the background color blue style from the others
    let ids = ["button-1", "button-2", "button-3", "button-4", "button-5"];
    let idIndex = ids.indexOf(id);
    delete ids[idIndex];

    for (let i = 0; i < ids.length; i++) {
      if (ids[i] == undefined) {
        continue;
      }

      document.getElementById(ids[i]).style.backgroundColor = "white";
      document.getElementById(ids[i]).style.color = "black";
    }
  }

  function toggleDay(event, day) {
    setDay(day);

    const id = event.target.id;
    document.getElementById(id).style.backgroundColor = "#e8f0fe";
    document.getElementById(id).style.color = "#2d6cdf";

    deactivateButtons(event);
  }

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
        <button
          className="weekdays-button"
          id="button-1"
          onClick={(e) => toggleDay(e, "Segunda")}
        >
          Segunda
        </button>

        <button
          className="weekdays-button"
          id="button-2"
          onClick={(e) => toggleDay(e, "Terça")}
        >
          Terça
        </button>

        <button
          className="weekdays-button"
          id="button-3"
          onClick={(e) => toggleDay(e, "Quarta")}
        >
          Quarta
        </button>

        <button
          className="weekdays-button"
          id="button-4"
          onClick={(e) => toggleDay(e, "Quinta")}
        >
          Quinta
        </button>

        <button
          className="weekdays-button"
          id="button-5"
          onClick={(e) => toggleDay(e, "Sexta")}
        >
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
