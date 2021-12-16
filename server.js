const express = require("express");
const path = require("path");
const app = express();
const router = require("./api/router");
const port = 1994;

app.use(express.static(__dirname + "/dist/my-first-project/"));
app.use("/api", router);

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/my-first-project/index.html"));
});

app.use((err, req, res) => {
  res.status(500).send(`Error occured: ${err.message}`);
});

app.listen(port, () => {
  console.log(`Example app listening at: http://localhost:${port}`);
});
