import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { blue, pink, green, orange, purple, teal } from "@mui/material/colors";
import CoffeeIcon from "@mui/icons-material/Coffee";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DevicesIcon from "@mui/icons-material/Devices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const categories = [
  {
    name: "Sleep Habits",
    color: blue[100],
    icon: <BedtimeIcon sx={{ color: blue[500], fontSize: 32, mr: 1 }} />,
    questions: [
      {
        id: "q1_weekday_sleep",
        text: "How many hours of sleep do you get on weekdays?",
        type: "number",
        min: 0,
        max: 24,
      },
      {
        id: "q2_weekend_sleep",
        text: "How many hours of sleep do you get on weekends?",
        type: "number",
        min: 0,
        max: 24,
      },
      {
        id: "q3_fall_asleep",
        text: "Do you find it difficult to fall asleep at night?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        id: "q4_refreshed",
        text: "Do you wake up feeling rested and refreshed?",
        type: "radio",
        options: ["Never", "Sometimes", "Often", "Always"],
      },
      {
        id: "q5_night_wakeups",
        text: "How many times do you wake up during the night?",
        type: "number",
        min: 0,
        max: 10,
      },
    ],
  },
  {
    name: "Daytime Functioning",
    color: orange[100],
    icon: <WbSunnyIcon sx={{ color: orange[500], fontSize: 32, mr: 1 }} />,
    questions: [
      {
        id: "q6_drowsy",
        text: "Do you feel drowsy during the day?",
        type: "radio",
        options: ["Rarely", "Sometimes", "Frequently"],
      },
      {
        id: "q7_dozing",
        text: "Do you doze off unintentionally during activities?",
        type: "radio",
        options: ["Never", "Sometimes", "Often"],
      },
      {
        id: "q8_concentration",
        text: "Rate your concentration during the day.",
        type: "radio",
        options: ["Poor", "Fair", "Good", "Excellent"],
      },
    ],
  },
  {
    name: "Stimulant & Substance Use",
    color: pink[100],
    icon: <CoffeeIcon sx={{ color: pink[500], fontSize: 32, mr: 1 }} />,
    questions: [
      {
        id: "q9_caffeine_amt",
        text: "How many caffeinated drinks do you consume daily?",
        type: "number",
        min: 0,
        max: 10,
      },
      {
        id: "q10_caffeine_evening",
        text: "Do you consume caffeine after 6 PM?",
        type: "radio",
        options: ["Never", "Occasionally", "Often"],
      },
      {
        id: "q11_substances",
        text: "Do you use alcohol, nicotine, or drugs before sleep?",
        type: "radio",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    name: "Technology & Screen Time",
    color: teal[100],
    icon: <DevicesIcon sx={{ color: teal[500], fontSize: 32, mr: 1 }} />,
    questions: [
      {
        id: "q12_screen_time",
        text: "How many hours of screen time before bed?",
        type: "number",
        min: 0,
        max: 12,
      },
      {
        id: "q13_bed_device",
        text: "Do you use phone/laptop in bed?",
        type: "radio",
        options: ["Never", "Occasionally", "Often"],
      },
      {
        id: "q14_device_reach",
        text: "Do you sleep with a device within reach?",
        type: "radio",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    name: "Stress & Mental Health",
    color: purple[100],
    icon: <PsychologyIcon sx={{ color: purple[500], fontSize: 32, mr: 1 }} />,
    questions: [
      {
        id: "q15_stress",
        text: "Rate your stress this week.",
        type: "radio",
        options: ["Low", "Moderate", "High", "Extreme"],
      },
      {
        id: "q16_anxious_thoughts",
        text: "Do anxious thoughts keep you up at night?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        id: "q17_depression_anxiety",
        text: "Have you had symptoms of depression/anxiety recently?",
        type: "radio",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    name: "Physical Activity & Health",
    color: green[100],
    icon: <FitnessCenterIcon sx={{ color: green[500], fontSize: 32, mr: 1 }} />,
    questions: [
      {
        id: "q18_exercise",
        text: "How often do you exercise?",
        type: "radio",
        options: ["Never", "1–2x/week", "3–5x/week", "Daily"],
      },
      {
        id: "q19_medical_conditions",
        text: "Do you have medical conditions like insomnia or sleep apnea?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        id: "q20_nap",
        text: "Do you nap during the day? If yes, how long?",
        type: "text",
      },
    ],
  },
];

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const validate = () => {
    let newErrors = {};
    categories.forEach((cat) => {
      cat.questions.forEach((q) => {
        if (
          answers[q.id] === undefined ||
          answers[q.id] === "" ||
          (q.type === "number" && isNaN(Number(answers[q.id])))
        ) {
          newErrors[q.id] = "Required";
        }
      });
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validate()) {
      // You can replace this with an API call
      console.log("Questionnaire responses:", answers);
      alert("Thank you for completing the questionnaire!");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", my: 4 }}>
      <Card
        sx={{
          background: `linear-gradient(135deg, ${blue[50]}, ${pink[50]}, ${teal[50]})`,
          boxShadow: 6,
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, color: blue[700], mb: 2 }}
          >
            Sleep Deprivation Questionnaire
          </Typography>
          <form onSubmit={handleSubmit}>
            {categories.map((cat, idx) => (
              <Box
                key={cat.name}
                sx={{ mb: 4, p: 2, borderRadius: 3, background: cat.color }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {cat.icon}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "primary.main" }}
                  >
                    {cat.name}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                  {cat.questions.map((q) => (
                    <Grid item xs={12} key={q.id}>
                      <FormControl
                        component="fieldset"
                        error={Boolean(errors[q.id]) && submitted}
                        fullWidth
                        sx={{ mb: 1 }}
                      >
                        <FormLabel component="legend" sx={{ fontWeight: 500 }}>
                          {q.text}
                        </FormLabel>
                        {q.type === "radio" && (
                          <RadioGroup
                            row
                            name={q.id}
                            value={answers[q.id] || ""}
                            onChange={(e) => handleChange(q.id, e.target.value)}
                          >
                            {q.options.map((opt) => (
                              <FormControlLabel
                                key={opt}
                                value={opt}
                                control={<Radio color="primary" />}
                                label={opt}
                                sx={{
                                  mx: 1,
                                  borderRadius: 2,
                                  background: "#fff",
                                  boxShadow: 1,
                                  px: 2,
                                  py: 0.5,
                                  "&.Mui-checked": { background: blue[50] },
                                }}
                              />
                            ))}
                          </RadioGroup>
                        )}
                        {q.type === "number" && (
                          <TextField
                            type="number"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            inputProps={{ min: q.min, max: q.max }}
                            value={answers[q.id] || ""}
                            onChange={(e) => handleChange(q.id, e.target.value)}
                            error={Boolean(errors[q.id]) && submitted}
                            helperText={
                              submitted && errors[q.id] ? errors[q.id] : ""
                            }
                            sx={{ background: "#fff", borderRadius: 2 }}
                          />
                        )}
                        {q.type === "text" && (
                          <TextField
                            type="text"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={answers[q.id] || ""}
                            onChange={(e) => handleChange(q.id, e.target.value)}
                            error={Boolean(errors[q.id]) && submitted}
                            helperText={
                              submitted && errors[q.id] ? errors[q.id] : ""
                            }
                            sx={{ background: "#fff", borderRadius: 2 }}
                          />
                        )}
                        {submitted && errors[q.id] && (
                          <Typography
                            color="error"
                            variant="caption"
                            sx={{ ml: 1 }}
                          >
                            {errors[q.id]}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: 20,
                  borderRadius: 3,
                  background: `linear-gradient(90deg, ${pink[400]}, ${blue[400]}, ${teal[400]})`,
                  color: "#fff",
                  boxShadow: 4,
                  "&:hover": {
                    background: `linear-gradient(90deg, ${blue[400]}, ${pink[400]}, ${teal[400]})`,
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
