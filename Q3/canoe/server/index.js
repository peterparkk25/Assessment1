const express = require("express");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  db.select("*")
    .from("choices")
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/addChoices", (req, res) => {
  const { choice1, choice2, choice3 } = req.body;
  if (choice1 || choice2 || choice3 !== "calculus") {
    throw "One of your choices must contain calculus!";
  } else {
    db("choices")
      .insert({
        choice1: choice1,
        choice2: choice2,
        choice3: choice3,
      })
      .then(() => {
        console.log("Choices Added");
        return res.json({ msg: "Choices Added" });
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

const port = process.env.PORT || 1337;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
