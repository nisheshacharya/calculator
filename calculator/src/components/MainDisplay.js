import { useContext, useEffect } from "react";
import globalContext from "../context/GlobalContext";

function MainDisplay() {
  const { digit } = useContext(globalContext);
  // console.log("out digit.display: ", digit.disp)

  // useEffect(() => {
  //   console.log("digit-use effect:", digit);

  //     console.log("digit display:", digit.disp);

  // }, [digit]);

  return (
    <div className="screen">
      <p>{digit.disp}</p>
    </div>
  );
}
export default MainDisplay;
