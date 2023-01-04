import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/movie-api";
import Spinner from '../components/spinner'
import RemoveFromPlaylist from "../components/cardIcons/removeFromPlaylist";
import WriteReview from "../components/cardIcons/writeReview";


const PlaylistMoviesPage = () => {
  const {playlists: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const playlistMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = playlistMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = playlistMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(genre => genre.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Must Watch Later Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromPlaylist movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default PlaylistMoviesPage;