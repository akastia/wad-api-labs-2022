import React from "react";
import ActorCard from "../actorCard";
import Grid from "@mui/material/Grid";

const ActorList = ( {actors, action }) => {
  let actorCard = actors.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorCard key={m.id} actor={m} action={action} />
    </Grid>
  ));
  return actorCard;
};

export default ActorList;