import React from "react";
import Tv from "../tvCard";
import Grid from "@mui/material/Grid";

const TvList = ( {tvs, action }) => {
  let TvCards = tvs.map((t) => (
    <Grid key={t.id} item xs={16} sm={6} md={4} lg={3} xl={2}>
      <Tv key={t.id} tv={t} action={action} />
    </Grid>
  ));
  return TvCards;
};

export default TvList;