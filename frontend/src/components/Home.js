import * as React from "react";
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
          <TextField fullWidth label="API Call" id="fullWidth" />
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
function JSONResponseBox() {
  return (
    <div>
      <textarea></textarea>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div>
        <FullWidthTextField />
      </div>
      <div>
        <JSONResponseBox />
      </div>
    </div>
  );
}
