import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
const classes = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "2rem",
  },
};
function FullWidthTextField() {
  return (
    <div style={classes.container}>
      <div>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="API Call"
            id="fullWidth"
            defaultValue="http://ourapi.com/player/"
          />
        </Box>
      </div>
      <div>
        <IconButton>
          <SearchIcon />
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
      </h3>
    </div>
  );
}

export default Search;
