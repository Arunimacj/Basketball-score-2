import "./Button.css";

function Button(props) {
  const clickHandler = (event) => {
    props.setScore((previous) => previous + Number(event.target.value));
  };

  return (
    <div>
      <div className="">
        <button onClick={clickHandler} value={1}>
          +{1}
        </button>

        <button value={3} onClick={clickHandler}>
          +{3}
        </button>

        <button value={2} onClick={clickHandler}>
          +{2}
        </button>
      </div>
    </div>
  );
}

export default Button;
