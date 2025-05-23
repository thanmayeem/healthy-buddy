import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      <motion.h1
        className="text-5xl font-bold text-blue-800 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to MindWave 🌊
      </motion.h1>
      <motion.p
        className="text-lg text-purple-700 max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Your personal space to reflect, track your emotions, and talk it out.
      </motion.p>
      <motion.div className="flex gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <Link to="/mood" className="px-6 py-2 bg-purple-400 hover:bg-purple-500 text-white rounded-full shadow-md transition">Track Mood</Link>
        <Link to="/chat" className="px-6 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full shadow-md transition">Talk to Bot</Link>
      </motion.div>
    </div>
  );
};

export default Home;