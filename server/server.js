const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ schoolName: ["NCAT", "PVAMU", "CAU"] });
});

app.listen(8000, () => {
  console.log("Server is listening on 8000");
});
