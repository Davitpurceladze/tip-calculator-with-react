import "./App.css";
import logo from "./assets/logo.svg";
import Body from "./Body/Body.jsx";

function App() {
  return (
    <div>
      <div className="logoContainer">
        <img src={logo} alt="splitter logo" />
      </div>
      <Body></Body>
    </div>
  );
}

export default App;
