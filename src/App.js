import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import MiniGames from "./components/MiniGames";
import PVT from "./components/MiniGames/PVT";
import Dashboard from "./components/Dashboard/Dashboard";
import MoodTracker from "./components/MoodTracker/MoodTracker";
import Settings from "./components/Settings/Settings";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/questionnaire">
            Questionnaire
          </Button>
          <Button color="inherit" component={Link} to="/minigames">
            Mini-Games
          </Button>
          <Button color="inherit" component={Link} to="/mood">
            Mood Tracker
          </Button>
          <Button color="inherit" component={Link} to="/settings">
            Settings
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/minigames" element={<MiniGames />}>
          <Route path="pvt" element={<PVT />} />
        </Route>
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
