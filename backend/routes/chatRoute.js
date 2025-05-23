const express = require("express");
const { Configuration, OpenAI } = require("openai");

const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ,
});

router.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).send("Chat error");
  }
});

module.exports = router;