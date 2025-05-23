import { useState } from "react";
import axios from "axios";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    const res = await axios.post("/chat", { message: msg });
    setChat([...chat, { user: msg }, { bot: res.data.reply }]);
    setMsg("");
  };

  return (
    <div className="p-4">
      <div className="h-80 overflow-y-scroll bg-lavender rounded p-2 mb-2">
        {chat.map((m, i) => (
          <div key={i} className={m.user ? "text-right" : "text-left"}>
            <span className="inline-block p-2 m-1 rounded bg-skyblue">
              {m.user || m.bot}
            </span>
          </div>
        ))}
      </div>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} className="input" />
      <button onClick={handleSend} className="btn bg-purplebar text-white mt-2">
        Send
      </button>
    </div>
  );
}
