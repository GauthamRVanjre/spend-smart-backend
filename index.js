import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
