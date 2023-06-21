import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const start = () => {
    if (isRunning) return;

    setIsRunning(true);
    const id = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1);

    setIntervalId(id);
  };

  const pause = () => {
    if (!isRunning) return;

    setIsRunning(false);
    if (intervalId) clearInterval(intervalId);
  };

  const clear = () => {
    pause();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const displayTime = new Date(time * 10).toISOString().substr(11, 12);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl mb-4 text-7xl">{displayTime}</h1>
      <div>
        <button className="px-4 py-2 mr-2 bg-blue-500 text-white hover:bg-blue-700 rounded-full" onClick={start}>Start</button>
        <button className="px-4 py-2 mr-2 bg-yellow-500 text-white hover:bg-yellow-700 rounded-full" onClick={pause}>Pause</button>
        <button className="px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-full" onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default App;
