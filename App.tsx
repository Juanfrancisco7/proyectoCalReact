import { useState } from 'react';
import { Plus, Minus, X } from 'lucide-react';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (number: string) => {
    if (currentValue === '0') {
      setCurrentValue(number);
    } else {
      setCurrentValue(currentValue + number);
    }
  };

  const handleOperationClick = (op: string) => {
    setPreviousValue(currentValue);
    setOperation(op);
    setCurrentValue('0');
  };

  const handleEqualsClick = () => {
    if (operation === '+') {
      setCurrentValue((parseFloat(previousValue) + parseFloat(currentValue)).toString());
    } else if (operation === '-') {
      setCurrentValue((parseFloat(previousValue) - parseFloat(currentValue)).toString());
    } else if (operation === 'x') {
      setCurrentValue((parseFloat(previousValue) * parseFloat(currentValue)).toString());
    }
    setPreviousValue('');
    setOperation('');
  };

  const handleClearClick = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperation('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-end p-4 border-b border-gray-200">
        <span className="text-3xl">{currentValue}</span>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('7')}>7</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('8')}>8</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('9')}>9</button>
        <button className="bg-red-500 hover:bg-red-600 rounded-lg p-4 text-white" onClick={() => handleOperationClick('x')}><X className="w-6 h-6" /></button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('4')}>4</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('5')}>5</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('6')}>6</button>
        <button className="bg-red-500 hover:bg-red-600 rounded-lg p-4 text-white" onClick={() => handleOperationClick('-')}><Minus className="w-6 h-6" /></button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('1')}>1</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('2')}>2</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('3')}>3</button>
        <button className="bg-red-500 hover:bg-red-600 rounded-lg p-4 text-white" onClick={() => handleOperationClick('+')}><Plus className="w-6 h-6" /></button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('0')}>0</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={handleClearClick}>C</button>
        <button className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-white" onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;