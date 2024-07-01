import "./App.css";
import logo from "./assets/ic-reset.svg";
import rock from "./assets/rock.svg";
import scissor from "./assets/scissor.svg";
import paper from "./assets/paper.svg";
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
        <div className="score">승부기록</div>
        <img src={rock} />
        <img src={scissor} />
        <img src={paper} />
        <div></div>
      </div>
    </div>
  );
}

export default App;
