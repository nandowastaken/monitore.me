import "../styles/Time.css";

export default function Time(props) {
  let xPosition;
  let yPosition;
  let size;
  let materiaFontSize;
  let monitorNameSize;

  const handlePosition = () => {
    switch (props.day) {
      case "sex":
        xPosition = 808;
        break;
      case "qui":
        xPosition = 646;
        break;
      case "qua":
        xPosition = 485;
        break;
      case "ter":
        xPosition = 323;
        break;
      case "seg":
        xPosition = 162;
        break;
    }

    switch (props.beginHour) {
      case "7:00":
      case "13:00":
        yPosition = 82;
        break;
      case "8:00":
      case "14:00":
        yPosition = 150;
        break;
      case "9:00":
      case "15:00":
        yPosition = 216;
        break;
      case "10:00":
      case "16:00":
        yPosition = 350;
        break;
      case "11:00":
      case "17:00":
        yPosition = 418;
        break;
    }

    switch (props.hours) {
      case 1:
        size = 60;
        materiaFontSize = 16;
        monitorNameSize = 12;
        break;
      case 2:
        size = 125;
        break;
      case 3:
        size = 190;
        break;
      case 4:
        size = 250;
        break;
      case 5:
        size = 320;
        break;
    }
  };

  handlePosition();

  return (
    <div
      className="Time"
      style={{
        height: `${size}px`,
        display: props.hours == 0 ? "none" : "flex",
        marginLeft: `${xPosition}px`,
        marginTop: `${yPosition}px`,
      }}
    >
      <div className="header-time">
        <div className="materia" style={{ fontSize: `${materiaFontSize}px` }}>
          {props.materia}
        </div>
        <div className="time">{props.time}</div>
      </div>

      <div className="monitor">
        <p
          className="monitor-paragraph"
          style={{ display: props.hours == 1 ? "none" : "block" }}
        >
          Monitor:
        </p>
        <a
          href=""
          className="monitor-name"
          style={{ fontSize: `${monitorNameSize}px` }}
        >
          {props.monitor}
        </a>
      </div>
    </div>
  );
}
