import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
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
var player_json; 
function FullWidthTextField() {
  const getPlayers = () => {
    axios
      .get("http://localhost:3001/players")
      .then((res) => {
        player_json = res.data;
        console.log(player_json)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
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
            defaultValue="http://ourapi.com/player/"
            sx={{ input: { color: "white" } }}
            color="secondary"
          />
        </Box>
      </div>
      <div>
        <IconButton onClick={getPlayers}>
          <SearchIcon style={{ color: "white" }} />
        </IconButton>
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
        <textarea style={classes.textarea} cols="100" rows="15">{player_json}</textarea>
      </h3>
    </div>
  );
}

export default Search;
