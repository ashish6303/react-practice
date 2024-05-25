import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(12);

  const addCounter = () => {  
    setCounter(counter+1);
  }

  const removeCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div className='learn-By-Hitest' >
      <h1>Learning React with Hitesh {counter}</h1>
      <h3>Counter Value {counter}</h3>
      <div>
        <button onClick={addCounter}>Add Value</button> { }
        <button onClick={removeCounter}>Remove Value</button>
      </div>
      <p>Footer {counter}</p>
    </div>
  );
}

export default App;
