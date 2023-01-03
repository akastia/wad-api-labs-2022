import React from "react";
import { getTvShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
// import AddToFavouritesIcon from '../components/cardIcons/addActorFavourites';

const TvShowPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvShows', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  return (
    <PageTemplate
      title="Tv Shows"
      tvs={tvs}
      action={(tv) => {
      }}
      
    />
);
};
export default TvShowPage;