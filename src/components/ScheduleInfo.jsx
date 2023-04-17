export default function ScheduleInfo(props) {
  return (
    <>
      <div className="select-time">
        <img
          src="https://raw.githubusercontent.com/nandowastaken/icons-storage/b5b79a1d86dc9e9bb142ced60ad90cda4086eba6/monitore-me/clock.svg"
          alt="Ícone de relógio."
        />
        <input
          type="time"
          className="time-input"
          defaultValue={props.beginHour}
          onChange={(e) => props.setBeginHour(e.target.value)}
        />
        <input
          type="time"
          className="time-input"
          defaultValue={props.endHour}
          onChange={(e) => props.setEndHour(e.target.value)}
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
    </>
  );
}
