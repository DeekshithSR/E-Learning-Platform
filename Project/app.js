const express = require("express");
const mongoose = require("mongoose");
const categoriesRouter = require("./Routes/categories");
const students = require("./Routes/students");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/LearningPlatform")
  .then(() => console.log("Connection is Successful to Database"))
  .catch((err) => console.error("Could not connect to mongodb", err));

app.use(express.json());
app.use("/api/categories", categoriesRouter);
app.use(students);

app.get("/", (req, res) => {
  res.send("Hello from MERN Server");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
