import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/movie-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const MovieUpcomingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const playlist = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlist))
  const addToPlaylists = (movieId) => true 


  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movies) => {
        return <AddToPlaylistIcon movie={movies} />
      }}
    />
  );
};

export default MovieUpcomingPage;