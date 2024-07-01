import "./App.css";
import logo from "./assets/ic-reset.svg";

function App() {
  return (
    <div className="App">
      <div className="background-App">
        <div className="mainname">
          가위바위보
          <img src={logo} className="mainimg" />
        </div>
        <div className="user">
          <div className="usermy">나</div>
          <div className="users">:</div>
          <div className="useryou">상대</div>
        </div>
        <img src="" />
        <div></div>
      </div>
    </div>
  );
}

export default App;
