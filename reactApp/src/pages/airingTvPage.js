import React from "react";
import { getAirTvShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const AiringTvPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvshows', getAirTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;


  return (
    <PageTemplate
      title="TV Shows Airing Today"
      tvs={tvs}
      action={(tvs) => {
      }}
      
    />
);
};
export default AiringTvPage;