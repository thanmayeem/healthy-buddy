import React from "react";
import { motion } from "framer-motion";
import MoodGraph from "../components/MoodGraph";
import JournalEditor from "../components/JournalEditor";

const Dashboard = () => {
  return (
    <div className="p-6">
      <motion.h2
        className="text-3xl font-semibold text-blue-900 mb-6"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Your Dashboard
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <MoodGraph />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <JournalEditor />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;