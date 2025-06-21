import { useState } from 'react';
import './App.css';
import { BlinkBlink, FancyBox } from './lib/components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <FancyBox />
        </div>
        <div className="w-1/2">
          <BlinkBlink
            counter={count}
            onClick={() => {
              setCount((count) => count + 1);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
