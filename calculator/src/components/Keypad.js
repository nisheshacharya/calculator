/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import '../index.css';
import globalContext from '../context/GlobalContext';

function Keypad() {
  const { digit, setDigit } = useContext(globalContext);
  useContext(globalContext);
  const [isResult, setIsResult] = useState(false);
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', '0', '←'];

  const keyMap = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: '0',
    '(': '(',
    ')': ')',
    '*': '×',
    '/': '÷',
    '+': '+',
    '-': '-',
    '.': '.',
    Backspace: '←'
  };

  const acceptedKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '-',
    '/',
    '*',
    '(',
    ')',
    '.',
    'Enter',
    'Escape',
    'Backspace'
  ];
  const operators = ['+', '-', '÷', '×'];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (acceptedKeys.includes(e.key)) {
        if (e.key === 'Enter') {
          calculate();
        } else if (e.key === 'Escape') {
          setDigit({ disp: '0' });
        } else if (e.key === 'Backspace') {
          setDigit((prevDigit) => ({
            disp: prevDigit.disp.length > 1 ? prevDigit.disp.slice(0, -1) : '0'
          }));
        } else {
          setToContext(e);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const setToContext = (e) => {
    if (e.target.value) {
      e.target.blur();
    }
    if (digit.disp.length <= 40) {
      if (
        ((digit.disp.length === 1 && digit.disp[0] === '0') ||
          digit.disp === 'ERROR' ||
          isResult) &&
        !operators.includes(e.target.value ? e.target.value : keyMap[e.key])
      ) {
        setDigit({ disp: e.target.value ? e.target.value : keyMap[e.key] });
      } else {
        if (
          operators.includes(digit.disp.slice(-1)) &&
          operators.includes(e.target.value ? e.target.value : keyMap[e.key])
        ) {
          setDigit((prevDigit) => ({
            disp:
              prevDigit.disp.slice(0, prevDigit.disp.length - 1) +
              (e.target.value ? e.target.value : keyMap[e.key])
          }));
        } else {
          setDigit((prevDigit) => ({
            disp: prevDigit.disp + (e.target.value ? e.target.value : keyMap[e.key])
          }));
        }
      }
    }
    setIsResult(false);
  };

  const clearScreen = (e) => {
    e.target.blur();
    setDigit({ disp: '0' });
  };

  const calculate = (e) => {
    console.log(e);
    let calculated = 0;
    let mathString = '';

    setIsResult(true);

    for (let i = 0; i < digit.disp.length; i++) {
      if (digit.disp[i] === '×') {
        mathString += '*';
      } else if (digit.disp[i] === '÷') {
        mathString += '/';
      } else {
        mathString += digit.disp[i];
      }
    }

    try {
      calculated = mathString.length > 10 ? eval(mathString).toFixed(10) : eval(mathString);
      setDigit({ disp: calculated.toString() });
    } catch {
      setDigit({ disp: 'ERROR' });
    }
  };

  const handleKeyPress = (e) => {
    e.target.blur();
    if (e.Keypad === 'Enter') {
      console.log('enter pressed');
    }
  };

  const backspace = () => {
    setDigit((prevDigit) => ({
      disp: prevDigit.disp.length > 1 ? prevDigit.disp.slice(0, -1) : '0'
    }));
  };

  return (
    <div className="keypad">
      <div className="number-button-container">
        <div className="non-zero">
          {numbers.map((int) => (
            <Button int={int} setToContext={setToContext} backspace={backspace} />
          ))}
        </div>

        <div className="zero-line">
          <button onClick={setToContext} value={'('} className="math">
            (
          </button>
          <button onClick={clearScreen} value={'Clr'}>
            Clr
          </button>
          <button onClick={setToContext} value={')'} className="math">
            )
          </button>
        </div>
      </div>
      <div className="other-button-container">
        <button onClick={setToContext} value={'+'}>
          +
        </button>
        <button onClick={setToContext} value={'-'}>
          -
        </button>
        <button onClick={setToContext} value={'×'} className="math">
          ×
        </button>
        <button onClick={setToContext} value={'÷'} className="math">
          ÷
        </button>
        <button onClick={calculate} onKeyDown={handleKeyPress} value="=" className="equal">
          =
        </button>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <div>
      <button
        onClick={props.int == '←' ? props.backspace : props.setToContext}
        value={props.int}
        className="numberKey">
        {props.int}
      </button>
    </div>
  );
}

export default Keypad;
