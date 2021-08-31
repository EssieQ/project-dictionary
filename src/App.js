import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          This dictionary is coded by {""}
          <a
            href="https://www.linkedin.com/in/esthercauven/"
            target="_blank"
            rel="noreferrer"
          >
            Esther Cauven
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/EssieQ/project-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
