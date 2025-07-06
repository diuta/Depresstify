import React, { useState } from "react";

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
    <div>
      <h2>Daily Questionnaire</h2>
      {!showFollowUp ? (
        <div>
          <label>{currentQuestion.text}</label>
          <input
            type={currentQuestion.type}
            min={currentQuestion.min}
            max={currentQuestion.max}
            value={answers[currentQuestion.id] || ""}
            onChange={handleChange}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      ) : (
        <div>
          <label>{followUpQuestions.caffeine.question.text}</label>
          <input
            type="text"
            value={answers.caffeine_times || ""}
            onChange={handleFollowUp}
          />
          <button onClick={handleFollowUpNext}>Finish</button>
        </div>
      )}
    </div>
  );
}
