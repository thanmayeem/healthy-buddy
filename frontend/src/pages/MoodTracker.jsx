import React, { useState } from "react";
import axios from "axios";

const moods = [
  { label: "Happy", color: "#bae6fd" },
  { label: "Sad", color: "#d8c9e3" },
  { label: "Angry", color: "#fca5a5" },
  { label: "Calm", color: "#a7f3d0" },
  { label: "Anxious", color: "#fcd34d" },
];

const MoodTracker = ({ setMoodColor }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleMoodSelect = async (mood) => {
    setSelectedMood(mood);
    setSaved(false);
    setMoodColor(mood.color);
    try {
      await axios.post("http://localhost:5000/mood", mood);
      setSaved(true);
    } catch (err) {
      console.error("Error saving mood:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-2xl font-semibold mb-4">How are you feeling today?</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {moods.map((m, i) => (
          <button
            key={i}
            onClick={() => handleMoodSelect(m)}
            style={{ backgroundColor: m.color }}
            className={`px-4 py-2 rounded-full text-white font-bold shadow-md transition duration-300 transform hover:scale-105`}
          >
            {m.label}
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="mt-6 text-lg">
          Selected Mood: <span className="font-bold">{selectedMood.label}</span>
        </div>
      )}
      {saved && <p className="text-green-500 mt-2">Mood saved successfully!</p>}
    </div>
  );
};

export default MoodTracker;