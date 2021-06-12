import logo from "./logo.svg";
import "./App.css";

const a = () => {
  return "2';
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>OK</p>
        <a href="/auth/google">Sign In With Google</a>
      </header>
    </div>
  );
}

export default App;
