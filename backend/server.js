const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); // Add this line to parse JSON request bodies

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});

app.post('/signup', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const sql = "INSERT INTO login (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
  const values = [firstname, lastname, email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      res.json("Error");
    } else {
      res.json(data);
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
