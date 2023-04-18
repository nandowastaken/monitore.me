import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import Logo from "../components/Logo";

export default function Register() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("blank");

  const [email, setEmail] = useState("");
  const [materia, setMateria] = useState("blank");

  const [senha, setSenha] = useState("");
  const [numero, setNumero] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const cursoId = parseInt(curso);
    const materiaId = parseInt(materia);

    const response = await fetch("http://localhost:8080/monitores/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        senha,
        email,
        cursoId,
        materiaId,
        numero,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      setLoggedIn(true);
    } else {
      alert("Alguma coisa deu errado.");
    }
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="Register">
      <nav className="navbar">
        <Logo />
      </nav>

      <form className="register-form" onSubmit={handleRegister}>
        <div className="register-header">
          <h1 className="register-header-title">Entre em contato ;)</h1>
          <p className="register-header-paragraph">
            Adoraríamos ter você por aqui!
          </p>
        </div>

        <div className="inputs-container">
          <div className="input-container">
            <label htmlFor="name" className="register-label">
              Nome *
            </label>
            <input
              type="text"
              id="name"
              className="register-input-box"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="curso" className="register-label">
              Curso *
            </label>
            <select
              name="curso"
              id="curso"
              value={curso}
              onChange={(e) => {
                setCurso(e.target.value);
              }}
              className="register-select-box"
            >
              <option value="blank"></option>
              <option value="1">Desenvolvimento de Sistemas</option>
            </select>
          </div>
        </div>

        <div className="inputs-container">
          <div className="input-container">
            <label htmlFor="email" className="register-label">
              Email *
            </label>
            <input
              type="text"
              id="email"
              className="register-input-box"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="materia" className="register-label">
              Matéria *
            </label>
            <select
              name="materia"
              id="materia"
              value={materia}
              className="register-select-box"
              onChange={(e) => {
                setMateria(e.target.value);
              }}
            >
              <option value="blank"></option>
              <option value="1">Introdução à Programação</option>
            </select>
          </div>
        </div>

        <div className="inputs-container">
          <div className="input-container">
            <label htmlFor="senha" className="register-label">
              Senha *
            </label>
            <input
              type="password"
              id="senha"
              className="register-input-box"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="numero" className="register-label">
              Número
            </label>
            <input
              type="text"
              id="numero"
              className="register-input-box"
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="register-button">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
