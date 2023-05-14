const express = require("express");
const { getPlayers, getPlayerById } = require("./dynamo");
const app = express();
const port = process.env.PORT || 3001;
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("NBA 2023 Season Player Data API");
});

app.get("/players", async (req, res) => {
  try {
    const players = await getPlayers();
    res.json(players);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Server Problem" });
  }
});

app.get("/players/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const players = await getPlayerById(id);
    res.json(players);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Server" });
  }
});

app.listen(port, () => {
  console.log("listening on port 3001");
});
