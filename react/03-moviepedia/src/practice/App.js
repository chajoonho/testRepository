import ReviewForm from "./ReviewForm";
import "./App.css";
import logoImg from "./assets/logo.png";
import State from "./State";

// function AppsortButton() {}

function App(props) {
  // return (
  //   <div className="App">
  //     <nav className="App-nav">
  //       <div className="App-nav-container">
  //         <img src={logoImg} />
  //         <select>
  //           <option>한국어</option>
  //           <option>English</option>
  //         </select>
  //       </div>
  //     </nav>
  //     <div className="App-container">
  //       <div className="App-ReviewForm">
  //         <ReviewForm />
  //       </div>
  //       <div className="App-sorts">
  //         <AppsortButton>최신순</AppsortButton>
  //         <AppsortButton>베스트순</AppsortButton>
  //       </div>
  //       <div></div>
  //     </div>
  //     <footer className="App-footer">
  //       <div className="App-footer-container">| 개인정보 처리방침</div>
  //     </footer>
  //   </div>
  // );
  return <State />;
}

export default App;
