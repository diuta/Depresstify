import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const initialQuestions = [
  {
    id: "sleep",
    text: "How many hours did you sleep last night?",
    type: "number",
    min: 0,
    max: 24,
  },
  {
    id: "caffeine",
    text: "How many caffeinated drinks did you have today?",
    type: "number",
    min: 0,
    max: 10,
  },
];

const followUpQuestions = {
  caffeine: {
    condition: (answers) => answers.caffeine > 0,
    question: {
      id: "caffeine_times",
      text: "At what times did you drink caffeine? (e.g., 8am, 2pm, 8pm)",
      type: "text",
    },
  },
};

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [showFollowUp, setShowFollowUp] = useState(false);

  const questions = initialQuestions;
  const currentQuestion = questions[step];

  const handleChange = (e) => {
    setAnswers({ ...answers, [currentQuestion.id]: e.target.value });
  };

  const handleNext = () => {
    if (currentQuestion.id === "caffeine" && answers.caffeine > 0) {
      setShowFollowUp(true);
    } else if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      alert("Questionnaire complete!");
    }
  };

  const handleFollowUp = (e) => {
    setAnswers({ ...answers, caffeine_times: e.target.value });
  };

  const handleFollowUpNext = () => {
    alert("Questionnaire complete!");
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Daily Questionnaire
        </Typography>
        {!showFollowUp ? (
          <div>
            <Typography>{currentQuestion.text}</Typography>
            <TextField
              type={currentQuestion.type}
              label={currentQuestion.text}
              variant="outlined"
              margin="normal"
              fullWidth
              inputProps={{
                min: currentQuestion.min,
                max: currentQuestion.max,
              }}
              value={answers[currentQuestion.id] || ""}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        ) : (
          <div>
            <Typography>{followUpQuestions.caffeine.question.text}</Typography>
            <TextField
              type="text"
              label={followUpQuestions.caffeine.question.text}
              variant="outlined"
              margin="normal"
              fullWidth
              value={answers.caffeine_times || ""}
              onChange={handleFollowUp}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleFollowUpNext}
            >
              Finish
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
