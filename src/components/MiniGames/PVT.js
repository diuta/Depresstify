import React, { useState } from "react";

export default function PVT() {
  const [waiting, setWaiting] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [message, setMessage] = useState("Click start to begin!");

  const startGame = () => {
    setReactionTime(null);
    setMessage("Wait for green...");
    setWaiting(true);
    setTimeout(() => {
      setStartTime(Date.now());
      setMessage("Click!");
      setWaiting(false);
    }, 1000 + Math.random() * 3000);
  };

  const handleClick = () => {
    if (waiting) {
      setMessage("Too soon! Try again.");
      setWaiting(false);
      setStartTime(null);
    } else if (startTime) {
      const rt = Date.now() - startTime;
      setReactionTime(rt);
      setMessage(`Your reaction time: ${rt} ms`);
      setStartTime(null);
    }
  };

  return (
    <div>
      <h2>PVT Reaction Time Test</h2>
      <button onClick={startGame}>Start</button>
      <div
        onClick={handleClick}
        style={{
          marginTop: 20,
          width: 200,
          height: 100,
          background: waiting ? "#ccc" : "#4caf50",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 24,
          cursor: "pointer",
        }}
      >
        {message}
      </div>
      {reactionTime && <div>Try again to improve your score!</div>}
    </div>
  );
}
