import "./App.css";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import logoImg from "./assets/logo.png";
import mockItems from "./mock.json";

function AppsortButton({ children }) {
  return <button className="AppSortButton selected">{children}</button>;
}

function App(props) {
  return (
    <div className="App">
      <nav className="App-nav">
        <div className="App-nav-container">
          <img className="App-logo" src={logoImg} />
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
        </div>
      </nav>
      <div className="App-container">
        <div className="App-ReviewForm">
          <ReviewForm />
        </div>
        <div className="App-sorts">
          <AppsortButton>최신순</AppsortButton>
          <AppsortButton>베스트순</AppsortButton>
        </div>
        <div className="App-ReviewList">
          <ReviewList items={mockItems} />
          <button className="App-load-more-button">더보기</button>
        </div>
      </div>
      <footer className="App-footer">
        <div className="App-footer-container">| 개인정보 처리방침</div>
      </footer>
    </div>
  );
}

export default App;
