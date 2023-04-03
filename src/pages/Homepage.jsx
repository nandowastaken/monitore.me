import "../styles/Homepage.css";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="search">
        <div className="header">
          <h2 className="search-title">
            Pesquise o horário do seu monitor aqui!
          </h2>
          <p className="search-paragraph">Basta preencher os campos abaixo!</p>
        </div>

        <form className="search-form">
          <div className="labelContainer">
            <label htmlFor="materia" className="label">
              Matéria
            </label>
            <select name="materia" id="materia" className="select-box">
              <option value="blank"></option>
              <option value="inpg">Introdução à Programação</option>
            </select>
          </div>

          <div className="labelContainer">
            <label htmlFor="curso" className="label">
              Curso
            </label>
            <select name="curso" id="curso" className="select-box">
              <option value="blank"></option>
              <option value="inpg">Desenvolvimento de Sistemas</option>
            </select>
          </div>

          <div className="labelContainer">
            <label htmlFor="turno" className="label">
              Turno
            </label>
            <select name="turno" id="turno" className="select-box">
              <option value="blank"></option>
              <option value="matutino">Matutino</option>
              <option value="vespertino">Vespertino</option>
            </select>
          </div>

          <button type="submit" className="search-button">
            Pesquisar
          </button>
        </form>
      </div>
    </div>
  );
}
