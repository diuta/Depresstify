import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          PVT Reaction Time Test
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={startGame}
          sx={{ mb: 2 }}
        >
          Start
        </Button>
        <Box
          onClick={handleClick}
          sx={{
            mt: 2,
            width: 200,
            height: 100,
            backgroundColor: waiting ? "#ccc" : "#4caf50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 24,
            cursor: "pointer",
            borderRadius: 2,
          }}
        >
          {message}
        </Box>
        {reactionTime && (
          <Typography sx={{ mt: 2 }}>
            Try again to improve your score!
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
