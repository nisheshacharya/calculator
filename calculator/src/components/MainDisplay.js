import { useContext } from "react";
import globalContext from "../context/GlobalContext";

function MainDisplay() {

    const displayDigit = useContext(globalContext)

    return(
        <div className= "screen">
        <p>{displayDigit}</p>
        </div>
    )
}
export default MainDisplay; 