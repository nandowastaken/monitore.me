import "../styles/Schedule.css";
import Time from "./Time";

export default function Schedule(props) {
  let hour_1, hour_2, hour_3, hour_4, hour_5, hour_6;
  const handleShift = () => {
    switch (props.shift) {
      case "matutino":
      case "blank":
        hour_1 = "7:00";
        hour_2 = "8:00";
        hour_3 = "9:00";
        hour_4 = "10:00";
        hour_5 = "11:00";
        hour_6 = "12:00";
        break;
      case "vespertino":
        hour_1 = "13:00";
        hour_2 = "14:00";
        hour_3 = "15:00";
        hour_4 = "16:00";
        hour_5 = "17:00";
        hour_6 = "18:00";
        break;
    }
  };

  handleShift();

  return (
    <div className={props.visibleHeader ? "NotVisible" : "Schedule"}>
      <Time
        hours={2}
        materia="Introdução à Programação"
        monitor="Eliel Cirino"
        day="seg"
        beginHour="10:00"
      />
      <Time
        hours={2}
        materia="Introdução à Programação"
        monitor="Eliel Cirino"
        day="ter"
        beginHour="7:00"
      />
      <Time
        hours={2}
        materia="Introdução à Programação"
        monitor="Eliel Cirino"
        day="qua"
        beginHour="7:00"
      />
      <Time
        hours={2}
        materia="Introdução à Programação"
        monitor="Eliel Cirino"
        day="qui"
        beginHour="7:00"
      />
      <Time
        hours={2}
        materia="Introdução à Programação"
        monitor="Eliel Cirino"
        day="sex"
        beginHour="7:00"
      />
      <table className="schedule">
        <tbody>
          <tr>
            <th className="schedule-column">Hora</th>
            <th className="schedule-column">Segunda</th>

            <th className="schedule-column">Terça</th>
            <th className="schedule-column">Quarta</th>
            <th className="schedule-column">Quinta</th>
            <th className="schedule-column">Sexta</th>
          </tr>

          <tr>
            <td className="schedule-row">{hour_1}</td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
          </tr>
          <tr>
            <td className="schedule-row">{hour_2}</td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
          </tr>
          <tr>
            <td className="schedule-row">{hour_3}</td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
          </tr>
          <tr>
            <td className="schedule-row">{hour_4}</td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
          </tr>
          <tr>
            <td className="schedule-row">{hour_5}</td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
          </tr>
          <tr>
            <td className="schedule-row">{hour_6}</td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
            <td className="schedule-row"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
