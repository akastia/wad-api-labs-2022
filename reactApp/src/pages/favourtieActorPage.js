import React, { useContext } from "react";
import PageTemplate from "../components/templateActorList";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";


const FavouriteActorPage = () => {
  const {favourites: actorId } = useContext(ActorsContext);

  // Create an array of queries and run in parallel.
  const favouriteActorQueries = useQueries(
    actorId.map((actorId) => {
      return {
        queryKey: ["people", { id: actorId }],
        queryFn: getActor,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => {
    
    return q.data
  });



  return (
    <PageTemplate
      title="Favourite Actors"
      actors={actors}
      action={(actor) => {
        return (
          <>
            <RemoveFromFavourites actor={actor} />
            
          </>
        );
      }}
    />
  );
};

export default FavouriteActorPage;