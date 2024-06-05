/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import globalContext from "../context/GlobalContext";

function MainDisplay() {
  const { digit } = useContext(globalContext);

  return (
    <div className="screen">
      <span className="displayed-number">{digit.disp}</span>
    </div>
  );
}
export default MainDisplay;
