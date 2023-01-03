import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterTvShowCard";
import TvList from "../tvList";
import Grid from "@mui/material/Grid";

function TvShowListPageTemplate({ tvs, title, action }) {
  console.log("tv", tvs)
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

   let displayedTv = tvs
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

    console.log("displayed tv shows", displayedTv)

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid item xs={14}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TvList action={action} tvs={displayedTv}></TvList>      
      </Grid>
    </Grid>
  );
}
export default TvShowListPageTemplate;