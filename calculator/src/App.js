
import './App.css';
// import Keypad from './components/Keypad';
import Calculator from './components/Calculator';
import globalContext from './context/GlobalContext';
import {useContext, useState} from "react";

function App() {
  const [digit, setDigit] = useState({disp: '0'})

  return (
    <div className="App">
      <globalContext.Provider value={{digit, setDigit}}>
    <Calculator/>
    </globalContext.Provider>
    </div>
  );
}

export default App;
