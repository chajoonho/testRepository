import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [push, setPush] = useState();
  // console.log("App 컴포넌트 랜더링..");
  const Click = () => {
    setCount(count + 1);
  };
  const handlePushChange = (e) => {
    setPush(e.target.value);
  };
  useEffect(() => {
    console.log("나는 화면이 최초 렌더링될 때 실행되는 uef야.");
  }, []); // [](디펜던시 리스트) 안에는 react 가 무엇을 지켜볼 지 작성해준다.
  useEffect(() => {
    console.log("나는 count가 변결될때 실행되는 uef야.");
  }, [count]);
  useEffect(() => {
    console.log("나는 inputValue가 변결될때 실행되는 uef야.");
  }, [push]);

  // useEffect(() => {
  //   console.log("나는 count가 변결될때 실행되는 uef야.");
  // }, [count, push]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={handlePushChange}
      />
      <h2>입력한 값 : {push}</h2>
      <h1>{count}</h1>
      <button onClick={Click}>Click me</button>
    </div>
  );
}

export default App;
