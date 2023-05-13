import Grid from '@mui/material/Grid';

const classes = {
  playoffContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: "2rem"
  },
  container:{
    paddingRight: '2rem'
  }
}

export default function Iframes() {
  return (
    <>
      <Grid container spacing = {4} sx={{p:8}}>
        <Grid item sm={12} md={6} style={classes.container}>
          <iframe
            title="Playoff 1"
            frameborder="0"
            scrolling="no"
            width="500"
            height="230"
            src="https://statsdream.com/basketball/teams/philadelphia-76ers-368043/iframe/?type=team-next-match&sport=4&country=231&template=824&conference=Western Conference&team=368043&timezone=Pacific/Midway&time=24&width=500&height=230&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&sh=1&hfb=1&hbc=ECC9EE&hfc=FFFFFF"
          ></iframe>
        </Grid>
        <Grid item sm={12} md={6} style={classes.container}>
          <iframe
            title="Playoff 2"
            frameborder="0"
            scrolling="no"
            width="500"
            height="230"
            src="https://statsdream.com/basketball/teams/l-a-lakers-367545/iframe/?type=team-next-match&sport=4&country=231&template=824&conference=Western Conference&team=367545&timezone=Pacific/Midway&time=24&width=500&height=230&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&sh=1&hfb=1&hbc=ECC9EE&hfc=FFFFFF"
          ></iframe>
        </Grid>
        <Grid item sm={12} md={6} style={classes.container}>
          <iframe
            title="Playoff 3"
            frameborder="0"
            scrolling="no"
            width="500"
            height="230"
            src="https://statsdream.com/basketball/teams/denver-nuggets-367063/iframe/?type=team-next-match&sport=4&country=231&template=824&conference=Western Conference&team=367063&timezone=Pacific/Midway&time=24&width=500&height=230&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&sh=1&hfb=1&hbc=ECC9EE&hfc=FFFFFF"
          ></iframe>
        </Grid>
        <Grid item sm={12} md={6} style={classes.container}>
          <iframe
            title="Playoff 4"
            frameborder="0"
            scrolling="no"
            width="500"
            height="230"
            src="https://statsdream.com/basketball/teams/miami-heat-367742/iframe/?type=team-next-match&sport=4&country=231&template=824&conference=Western Conference&team=367742&timezone=Pacific/Midway&time=24&width=500&height=230&font=Arial&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&sh=1&hfb=1&hbc=ECC9EE&hfc=FFFFFF"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
}
