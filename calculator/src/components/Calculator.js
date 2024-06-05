/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import Display from "./MainDisplay";
import Keypad from "./Keypad";

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <Keypad />
    </div>
  );
}

export default Calculator;
