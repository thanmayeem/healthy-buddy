require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { PrismaClient } = require('@prisma/client');
const { OpenAI } = require("openai");

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("💜 Mental Health API is running!");
});

// Your routes
app.use("/chat", require("./routes/chatRoute"));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
