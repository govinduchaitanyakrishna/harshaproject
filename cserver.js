const PORT = 8000;

const express = require("express");
// const multer = require("multer"); // Import multer
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
app.use(cors());

// Multer configuration
const API_KEY = "AIzaSyCp1FXejQC3R5s2ERDiLIwoPj8yeV0ViaI";
app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-0125",
      messages: [{ role: "user", content: "how are you?" }],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/completions",
      options,
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});
app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
