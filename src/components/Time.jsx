import "../styles/Time.css";

export default function Time(props) {
  return (
    <div className="Time">
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
