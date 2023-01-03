import React from "react";
import { getTopTvShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const TopTvPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvshows', getTopTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  
  return (
    <PageTemplate
      title="Top TV Shows"
      tvs={tvs}
      action={(tvs) => {
      }}
      
    />
);
};
export default TopTvPage;