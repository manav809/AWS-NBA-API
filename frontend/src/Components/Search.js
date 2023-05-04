import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import axios from "axios";
import { useState } from "react";

const classes = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "2rem",
  },
  textarea: {
    resize: "none",
    padding: "5px",
  },
};
// var player_json;

function FullWidthTextField() {
  async function getPlayers(textField) {
    axios
      .get(`${textField}`)
      .then((res) => {
        setPlayerJson(JSON.stringify(res.data, null, 4));
        console.log(playerJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [textField, setTextField] = useState("http://localhost:3001/players");
  const [playerJson, setPlayerJson] = useState("");
  return (
    <div>
      <div style={classes.container}>
        <div>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              py: 5,
            }}
          >
            <TextField
              fullWidth
              label="API Call"
              id="fullWidth"
              defaultValue="http://localhost:3001/players"
              sx={{ input: { color: "white" } }}
              color="secondary"
              onChange={(event) => setTextField(event.target.value)}
            />
          </Box>
        </div>
        <div>
          <IconButton onClick={() => getPlayers(textField)}>
            <SearchIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
      <div>
        <TextareaAutosize
          style={{ width: 600, height: 300, padding: 4, overflow: "scroll" }}
          value={`${playerJson}`}
        />
      </div>
    </div>
  );
}
function Search() {
  return (
    <div className="App">
      <h3 className="App-header">
        <div>Search Player</div>
        <FullWidthTextField />
      </h3>
    </div>
  );
}

export default Search;
