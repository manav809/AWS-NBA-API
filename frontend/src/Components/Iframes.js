import Grid from "@mui/material/Grid";

const classes = {
  playoffContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: "2rem",
  },
  container: {
    paddingRight: "2rem",
  },
};

export default function Iframes() {
  return (
    <>
      <Grid container spacing={4} sx={{ p: 8 }}>
        <Grid item sm={12} md={6} style={classes.container}>
          <iframe
            title="Standings1"
            frameborder="0"
            scrolling="no"
            width="500"
            height="450"
            src="https://statsdream.com/basketball/usa/nba/iframe/?type=table&sport=4&country=231&template=824&conference=Eastern Conference&team=&timezone=Pacific/Midway&time=24&po=1&ma=0&wi=1&los=1&pts=0&ng=0&form=0&width=500&height=700&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=ECC9EE&hfc=FFFFFF"
          ></iframe>
        </Grid>
        <Grid item sm={12} md={6} style={classes.container}>
          <iframe
            title="Standings2"
            frameborder="0"
            scrolling="no"
            width="500"
            height="450"
            src="https://statsdream.com/basketball/usa/nba/iframe/?type=table&sport=4&country=231&template=824&conference=Western Conference&team=&timezone=Pacific/Midway&time=24&po=1&ma=0&wi=1&los=1&pts=0&ng=0&form=0&width=500&height=700&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=ECC9EE&hfc=FFFFFF"
          ></iframe>
        </Grid>
        <Grid item sm={12} md={6} style={classes.container}>
          <iframe
            title="ECF"
            frameborder="0"
            scrolling="no"
            width="500"
            height="230"
            src="https://statsdream.com/basketball/teams/miami-heat-367742/iframe/?type=team-next-match&sport=4&country=231&template=824&conference=Eastern Conference&team=367742&timezone=Pacific/Midway&time=24&po=1&ma=0&wi=1&los=1&pts=0&ng=0&form=0&width=500&height=700&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=ECC9EE&hfc=FFFFFF"
          ></iframe>
        </Grid>
        <Grid item sm={12} md={6} style={classes.container}>
          <iframe
            title="WCF"
            frameborder="0"
            scrolling="no"
            width="500"
            height="230"
            src="https://statsdream.com/basketball/teams/l-a-lakers-367545/iframe/?type=team-next-match&sport=4&country=231&template=824&conference=Eastern Conference&team=367545&timezone=Pacific/Midway&time=24&po=1&ma=0&wi=1&los=1&pts=0&ng=0&form=0&width=500&height=700&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=ECC9EE&hfc=FFFFFF"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
}
