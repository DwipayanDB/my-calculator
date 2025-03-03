// src/components/Keypad/Keypad.js
import React from 'react';
import Button from '../Button/Button';
import './Keypad.css';

const Keypad = ({ 
  onDigitClick, 
  onOperatorClick, 
  onDecimalClick, 
  onClearClick, 
  onEqualsClick,
}) => {
  return (
    <div className="calculator-keypad">
      <div className="input-keys">
        <div className="function-keys">
          <Button 
            className="key-clear" 
            onClick={onClearClick}
          >
            AC
          </Button>
        </div>
        <div className="digit-keys">
          <Button onClick={() => onDigitClick('7')}>7</Button>
          <Button onClick={() => onDigitClick('8')}>8</Button>
          <Button onClick={() => onDigitClick('9')}>9</Button>
          <Button onClick={() => onDigitClick('4')}>4</Button>
          <Button onClick={() => onDigitClick('5')}>5</Button>
          <Button onClick={() => onDigitClick('6')}>6</Button>
          <Button onClick={() => onDigitClick('1')}>1</Button>
          <Button onClick={() => onDigitClick('2')}>2</Button>
          <Button onClick={() => onDigitClick('3')}>3</Button>
          <Button onClick={() => onDigitClick('0')}>0</Button>
          <Button onClick={onDecimalClick}>.</Button>
          <Button onClick={onEqualsClick}>=</Button>
        </div>
      </div>
      <div className="operator-keys">
        <Button className="operator" onClick={() => onOperatorClick('/')}>÷</Button>
        <Button className="operator" onClick={() => onOperatorClick('*')}>×</Button>
        <Button className="operator" onClick={() => onOperatorClick('-')}>−</Button>
        <Button className="operator" onClick={() => onOperatorClick('+')}>+</Button>
      </div>
    </div>
  );
};

export default Keypad;