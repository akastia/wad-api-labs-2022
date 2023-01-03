import React, { useState } from "react";
import HeaderTvList from "../headerTvShowList";
import FilterCard from "../filterMoviesCard";
import TvList from "../tvShowList";
import Grid from "@mui/material/Grid";

function TvsListPageTemplate({ tvs, title, action }) {
  console.log("Tvs", tvs)
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

   let displayedTvs = tvs
    // .filter((m) => {
    //   return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    // })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

    console.log("displayed tv shows", displayedTvs)

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid iaem xs={12}>
        <HeaderTvList title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TvList action={action} tvs={displayedTvs}></TvList>      
      </Grid>
    </Grid>
  );
}
export default TvsListPageTemplate;