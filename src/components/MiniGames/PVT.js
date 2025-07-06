import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

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
    <div className="flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100">
      <Card className="w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-pink-600">
          PVT Reaction Time Test
        </h2>
        <Button onClick={startGame} variant="primary" className="mb-4 w-full">
          Start
        </Button>
        <div
          onClick={handleClick}
          className={`w-full h-24 flex items-center justify-center rounded-lg text-2xl font-semibold cursor-pointer mb-4 transition-colors ${
            waiting
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {message}
        </div>
        {reactionTime && (
          <div className="text-green-600 font-bold">
            Try again to improve your score!
          </div>
        )}
      </Card>
    </div>
  );
}
