import "../index.css";

function Keypad() {
  const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  return (
    <div className="keypad">
      <div className="number-button-container">
        <div className="non-zero">
          {nums.map((int) => (
            <Button int={int} />
          ))}
        </div>

        <div className="zero-line">
          <button>+</button>
          <button>0</button>
          <button>-</button>
        </div>
      </div>
      <div className="other-button-container">
        <button>×</button>
        <button>÷</button>
        <button>=</button>
        <button>Clr</button>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <div>
      <button value={props.int}>{props.int}</button>
    </div>
  );
}

export default Keypad;
