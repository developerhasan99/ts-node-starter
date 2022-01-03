import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "Server is running" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
