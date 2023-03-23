import "../styles/Homepage.css";

export default function Homepage() {
    return (
        <div className="Homepage">
            <nav className="navbar">
                <p className="logo">monitoria-agenda.com</p>
                <div className="profile-container"></div>
            </nav>

            <div className="search">
                <h2 className="search-title">Pesquise o horário do seu monitor aqui!</h2>
                <p className="search-paragraph">Basta preencher os campos abaixo!</p>
                

                <form className="search-form">
                    <label htmlFor="materia">Matéria</label>
                    <select name="materia" id="materia">
                        <option value="blank"></option>
                        <option value="inpg">Introdução à Programação</option>
                    </select>

                    <label htmlFor="curso">Curso</label>
                    <select name="curso" id="curso">
                        <option value="blank"></option>
                        <option value="inpg">Desenvolvimento de Sistemas</option>
                    </select>

                    <label htmlFor="turno">Turno</label>
                    <select name="turno" id="turno">
                        <option value="blank"></option>
                        <option value="matutino">Matutino</option>
                        <option value="vespertino">Vespertino</option>
                    </select>

                    <button type="submit">Pesquisar</button>

                </form>
            </div>
        </div>
    )
}