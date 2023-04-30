import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Button from "./Button";

function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const clickHandler = () => {
    setScoreA(0);
    setScoreB(0);
  };
  return (
    <div className="App">
      <h1>BASKETBALL SCORE BOARD</h1>
      <Board teamA={scoreA} teamB={scoreB} />
      <div className="button">
        <Button setScore={setScoreA} />
        <Button setScore={setScoreB} />
      </div>
      <button onClick={clickHandler}>Reset</button>
    </div>
  );
}

export default App;
