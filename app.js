const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();
const MONGO_DB_URL = process.env.MONGO_DB_URL;
app.use(express.json());
const PORT = 3000;

app.use("/api/tasks", taskRoute);

const start = async () => {
  try {
    await connectDB(MONGO_DB_URL);
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
