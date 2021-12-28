const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const db = require("./api/db/dbconnect");
const app = express();
const router = require("./api/routes/routes");
const port = 1994;

app.use(express.static(__dirname + "/dist/my-first-project/"));
app.use(bodyParser.json());
app.use("/api", router);


app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/my-first-project/index.html"));
});

app.use((err, req, res) => {
  res.status(500).send(`Error occured: ${err.message}`);
});

app.listen(port, async () => {
  await db();
  console.log(`Example app listening at: http://localhost:${port}`);
});
