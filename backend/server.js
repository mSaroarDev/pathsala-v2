const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
dotenv.config();

// send a simple message to homepage
app.get("/", (req, res) => {
  res.send("Server Running on port: " + process.env.PORT);
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port: ` + process.env.PORT);
});
