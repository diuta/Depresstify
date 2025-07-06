import React, { useState } from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
    <div className="flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Daily Questionnaire
        </h2>
        {!showFollowUp ? (
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              {currentQuestion.text}
            </label>
            <Input
              type={currentQuestion.type}
              min={currentQuestion.min}
              max={currentQuestion.max}
              value={answers[currentQuestion.id] || ""}
              onChange={handleChange}
              className="mb-4"
            />
            <Button onClick={handleNext} variant="primary" className="w-full">
              Next
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              {followUpQuestions.caffeine.question.text}
            </label>
            <Input
              type="text"
              value={answers.caffeine_times || ""}
              onChange={handleFollowUp}
              className="mb-4"
            />
            <Button
              onClick={handleFollowUpNext}
              variant="secondary"
              className="w-full"
            >
              Finish
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
