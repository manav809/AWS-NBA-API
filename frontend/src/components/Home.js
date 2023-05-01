import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
const classes = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "2rem",
  },
  textstyle: {
    marginTop: "3em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
const valor = {
  "kisiler": [
      {
          "ad": "Ahmet",
          "soyad": "Koç",
          "yas": 37,
          "emekli": false,
          "maas": null,
          "hobi": ["müzik", "spor", "resim"]
      },
      {
          "ad": "Ümit",
          "soyad": "Öztürk",
          "yas": 36,
          "emekli": false,
          "maas": 7500,
          "hobi": ["kaligrafi", "spor", "müzik"]
      }
  ]
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
          <Typography variant="h2" sx={{py:3}}>NBA API</Typography>
          <TextField fullWidth label="API Call" id="fullWidth" />
        </Box>
      </div>
      <div>
        <IconButton sx={{mt:15.2}}>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
}
function JSONResponseBox() {
  return (
    <div style={classes.textstyle}>
      <textarea sx ={{mb:20}} rows={30} cols={80} defaultValue={valor}/>
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
