import "./Board.css";

function Board(props) {
  return (
    <div className="board">
      <p className="main">Team A</p>
      <p className="main">Team B</p>
      <div className="main">
        <div className="display ">
          <p className="demo">{props.teamA}</p>
        </div>
      </div>
      <div className="main">
        <div className="display">
          <p className="demo">{props.teamB}</p>
        </div>
      </div>
    </div>
  );
}

export default Board;
