import { useState } from 'react';
import './App.css';
import { BlinkBlink, FancyBox, Pikachu } from './lib/components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div className="w-md-1/2">
          <FancyBox />
        </div>
        <div className="w-md-1/2">
          <BlinkBlink
            counter={count}
            onClick={() => {
              setCount((count) => count + 1);
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-md-1/2">
          <Pikachu />
        </div>
      </div>
    </>
  );
}

export default App;
