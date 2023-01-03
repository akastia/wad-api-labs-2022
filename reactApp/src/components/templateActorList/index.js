import React, { useState } from "react";
import HeaderActor from "../headerActorList";
import FilterCard from "../filterMoviesCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function PageTemplate({ actors, name, action }) {
  console.log("actors", actors)
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

   let displayedActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

    console.log("displayed actors", displayedActors)

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid iaem xs={12}>
        <HeaderActor name={name} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>      
      </Grid>
    </Grid>
  );
}
export default PageTemplate;