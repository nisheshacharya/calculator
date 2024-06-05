/* eslint-disable react/react-in-jsx-scope */

import './App.css';
// import Keypad from './components/Keypad';
import Calculator from './components/Calculator';
import globalContext from './context/GlobalContext';
import { useState } from 'react';

function App() {
  const [digit, setDigit] = useState({ disp: '0' });
  const [bigNumber, setBigNumber] = useState({ stored: ' ' });

  return (
    <div className="App">
      <globalContext.Provider value={{ digit, setDigit, bigNumber, setBigNumber }}>
        <Calculator />
      </globalContext.Provider>
    </div>
  );
}

export default App;
