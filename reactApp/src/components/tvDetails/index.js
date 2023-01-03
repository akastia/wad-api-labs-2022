import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import StarRate from "@mui/icons-material/StarRate";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const chip = { margin: 0.5 };

const TvDetails = ({ tv }) => { 
  const [drawerOpen, setDrawerOpen] = useState(false);

  
  return (
    <>
      <Typography variant="h6" component="p">
        Overview
      </Typography>
    
      <Typography variant="h7" component="ul">
        {tv.overview}
      </Typography>


      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {tv.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip label={`Episode Run time: ${tv.episode_run_time} min.`} />
        
        <Chip
          icon={<StarRate />}
          label={` ${tv.vote_average} (${tv.vote_count})`}
        />
        <Chip label={`First airing: ${tv.first_air_date}`} />
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip
          label={`Episodes : ${tv.number_of_episodes} & seasons : ${tv.number_of_seasons}`}
        />
        <Chip label={`Origin Country: ${tv.origin_country}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
        {tv.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Seasons" sx={chip} color="primary" />
        </li>
        {tv.seasons.map((s) => (
          <><li key={s.name}>
            <Chip label={s.name} sx={chip} />
          </li><li key={s.air_date}>
              <Chip label={s.air_date} sx={chip} />
            </li></>
        ))}
      </Paper>
      
      
      
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>
    </>
  );
};

export default TvDetails ;