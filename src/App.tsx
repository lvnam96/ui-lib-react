import { useState } from 'react';
import './App.css';
import { FancyBox } from './lib/components/FancyBox';
import { BlinkBlink } from './lib/components/BlinkBlink';
import { Pikachu } from './lib/components/Pikachu';

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
