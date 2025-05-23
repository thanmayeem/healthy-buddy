import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoodTracker from "./pages/MoodTracker";
import Journal from "./pages/Journal";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";


import MoodWave from "./components/MoodWave";

const App = () => {
  const [moodColor, setMoodColor] = useState("#87CEEB");

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#e3d6f3] to-[#cbeafe] font-sans relative pb-20">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mood" element={<MoodTracker setMoodColor={setMoodColor} />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <MoodWave color={moodColor} />
      </div>
    </Router>
  );
};

export default App;