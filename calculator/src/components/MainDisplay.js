import { useContext, useEffect } from "react";
import globalContext from "../context/GlobalContext";

function MainDisplay() {
  const { digit } = useContext(globalContext);

  return (
    <div className="screen">
      <p>{digit.disp}</p>
    </div>
  );
}
export default MainDisplay;
