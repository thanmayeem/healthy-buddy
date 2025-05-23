import React from "react";

const MoodWave = ({ color }) => {
  return (
    <div className="absolute bottom-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
};

export default MoodWave;
