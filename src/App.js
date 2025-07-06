import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import MiniGames from "./components/MiniGames";
import PVT from "./components/MiniGames/PVT";
import Dashboard from "./components/Dashboard/Dashboard";
import MoodTracker from "./components/MoodTracker/MoodTracker";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/questionnaire">Questionnaire</Link> |{" "}
        <Link to="/minigames">Mini-Games</Link> |{" "}
        <Link to="/mood">Mood Tracker</Link> |{" "}
        <Link to="/settings">Settings</Link>
      </nav>
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
