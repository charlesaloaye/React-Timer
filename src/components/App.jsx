import React, { useState } from "react";

const App = () => {
  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  const getCurrentTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    setInterval(getCurrentTime, 1000);
  };

  return (
    <div className="container">
      <h3>{time}</h3>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
};

export default App;
