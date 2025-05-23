import React, { useState } from "react";

const Journal = () => {
  const [entry, setEntry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Journal Entry: ", entry);
    setEntry("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl text-blue-900 font-semibold mb-4">Write your thoughts 💭</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className="p-4 rounded-xl border border-purple-300 shadow-sm min-h-[200px] resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Let it all out..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 self-end bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-full transition"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default Journal;