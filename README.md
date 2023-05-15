# AWS-NBA-API
### Cloud Computing Final Project 
### Team: Manav Patel, Joshua Ramcharan, Farabi Choudhury,Aksha Patel

### Amplify: https://main.d16q82mlcgu0sz.amplifyapp.com/
### Render API Endpoint: https://api-n3bp.onrender.com
### Render API Player Endpoint: https://api-n3bp.onrender.com/players/
### Render API Player By ID Endpoint: https://api-n3bp.onrender.com/players/307
![NBA GIF](https://media.giphy.com/media/l0MYHiW8ozFLda6ze/giphy.gif)

## Run Frontend
```bash
cd frontend
npm i
npm start
```

## Run Backend

```bash
cd backend 
npm i 
node index.js (note environment variables will be needed)
```

HTTP Protocols

```bash
HTTP GET/players/
HTTP GET/players/{id}

Sample Response Body: 
{
  "Item": {
    "Personal_Fouls": 1.6,
    "Defensive_Rebounds": 7.1,
    "Effective_Field_Goal%": 0.549,
    "Team": "LAL",
    "Player": "LeBron James",
    "Games": 55,
    "Field_Goal%": 0.5,
    "Blocks": 0.6,
    "2_Point": 8.9,
    "Offensive_Rebounds": 1.2,
    "Field_Goals": 11.1,
    "id": 307,
    "Free_Throw_Attempts": 5.9,
    "Minutes_Played": 35.5,
    "3_Point%": 0.321,
    "2_Point%": 0.58,
    "Free_Throws": 4.6,
    "3_Point_Attempts": 6.9,
    "Field_Goal_Average": 22.2,
    "Free_Throw%": 0.768,
    "Games_Started": 54,
    "Assits": 6.8,
    "Points": 28.9,
    "3_Point": 2.2,
    "2_Point_Attempts": 15.3,
    "Turnovers": 3.2,
    "Total_Rebounds": 8.3,
    "Position": "PF",
    "Steals": 0.9,
    "Age": 38
  }
}

```
