import React from "react";
import { getActors } from "../api/tmdb-api";
import ActorListPageTemplate from '../components/templateActorList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // // Redundant, but necessary to avoid app crashing.
  const favourites = actors.filter(a => a.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (actorId) => true 

  return (
    <ActorListPageTemplate
      title="Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
);
};
export default ActorsPage;