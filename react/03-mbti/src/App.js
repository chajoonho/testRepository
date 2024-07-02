import logo from "./logo.svg";
import "./App.css";
import cancel from "./assets/x.svg";
import repeat from "./assets/repeat.svg";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="header">
          <h1 class="header-heading">새 컬러 등록하기</h1>
          <a class="cancel" href="javascript:history.go(-1)">
            <img class="cancel-icon" src={cancel} />
          </a>
        </div>
        <div class="section">
          <h2 class="section-heading">MBTI</h2>
          <div class="mbti-options" id="mbti-options"></div>
        </div>
        <div class="section">
          <h2 class="section-heading">
            컬러
            <button class="random">
              <img class="repeat-icon" src={repeat} />
            </button>
          </h2>
          <div class="color-input-container">
            <input class="color-input" type="text" value="#9441FF" />
            <span class="color-input-chip" id="colorChip"></span>
          </div>
        </div>
        <button class="submit">컬러 등록</button>
      </div>
    </div>
  );
}

export default App;
