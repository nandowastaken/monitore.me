import "../styles/Schedule.css";
import Time from "./Time";

export default function Schedule(props) {
  return (
    <div className={props.visibleHeader ? "NotVisible" : "Schedule"}>
      <table className="schedule">
        <tr>
          <th className="schedule-column">Hora</th>
          <th className="schedule-column">Segunda</th>
          <th className="schedule-column">Terça</th>
          <th className="schedule-column">Quarta</th>
          <th className="schedule-column">Quinta</th>
          <th className="schedule-column">Sexta</th>
        </tr>

        <tr>
          <td className="schedule-row">7:00</td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
        </tr>
        <tr>
          <td className="schedule-row">8:00</td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
        </tr>
        <tr>
          <td className="schedule-row">9:00</td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
        </tr>
        <tr>
          <td className="schedule-row">10:00</td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
        </tr>
        <tr>
          <td className="schedule-row">11:00</td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
        </tr>
        <tr>
          <td className="schedule-row">12:00</td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
          <td className="schedule-row"></td>
        </tr>
      </table>
    </div>
  );
}
