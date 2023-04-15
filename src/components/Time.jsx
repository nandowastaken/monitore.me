import "../styles/Time.css";

export default function Time(props) {
  let xPosition;
  let yPosition;
  let size;

  const handlePosition = () => {
    switch (props.day) {
      case "seg":
        xPosition = 808;
        break;
      case "ter":
        xPosition = 646;
        break;
      case "qua":
        xPosition = 485;
        break;
      case "qui":
        xPosition = 323;
        break;
      case "sex":
        xPosition = 162;
        break;
    }

    switch (props.beginHour) {
      case "7:00":
      case "13:00":
        yPosition = 335;
        break;
      case "8:00":
      case "14:00":
        yPosition = 400;
        break;
      case "9:00":
      case "15:00":
        yPosition = 465;
        break;
      case "10:00":
      case "16:00":
        yPosition = 530;
        break;
      case "11:00":
      case "17:00":
        yPosition = 595;
        break;
    }

    switch (props.hours) {
      case 1:
        size = 60;
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
        right: `${xPosition}px`,
        top: `${yPosition}px`,
      }}
    >
      <div className="header-time">
        <div className="materia">{props.materia}</div>
        <div className="time">{props.time}</div>
      </div>

      <div className="monitor">
        <p className="monitor-paragraph">Monitor:</p>
        <a href="" className="monitor-name">
          {props.monitor}
        </a>
      </div>
    </div>
  );
}
