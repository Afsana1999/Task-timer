import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Timer from "./Timer";
import TimerBtn from "./TimerBtn";

function App() {
  let [second, setSecond] = useState(59);

  let decrease = () => {
    setInterval(() => {
      if (second > 0) {
        setSecond((second = second - 1));
      }
    }, 1000);
  };

  let stop=()=>{
    setSecond(second)
  }
  return (
    <div className="App">
      <Timer miniute={second}/>
      <TimerBtn timer={decrease} />
      <button onClick={stop}>d</button>
    </div>
  );
}

export default App;
