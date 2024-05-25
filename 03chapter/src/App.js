import './App.css';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('olive');

  const bgOlive = () => {
    setColor('olive')
  }
  const bgGreen = () => {
    setColor('green')
  }
  const bgBlue = () => {
    setColor('blue')
  }

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center insert-x-0">
        <div className='flex flex-wrap justify-center m-12  gap-3 '>
          <button className='bg-white p-3 m-2 rounded-2xl' onClick={bgOlive}>test1 </button>
          <button className='bg-white p-3 m-2 rounded-2xl' onClick={bgGreen}>test2 </button>
          <button className='bg-white p-3 m-2 rounded-2xl' onClick={bgBlue}>test3 </button>
        </div>
      </div>
    </div>
  );
}

export default App;
