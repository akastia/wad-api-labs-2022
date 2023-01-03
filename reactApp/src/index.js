import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieUpcomingPage from "./pages/movieUpcomingPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
// import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";
import TvShowsContextProvider from "./contexts/tvShowContext"
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import TopMoviesPage from "./pages/topMoviesPage";
import NowPlayingMoviePage from "./pages/playingnowPage";
import ActorsPage from "./pages/movieActorPage";
import ActorDetailsPage from "./pages/movieActorDetailPage";
import FavouriteActorsPage from "./pages/favourtieActorPage";
import TvShowPage from "./pages/TvPage";
import TvShowDetailsPage from "./pages/TvDetailPage";
import TopTvPage from "./pages/topRatedTvPage";
import AiringTvPage from "./pages/airingTvPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <ActorsContextProvider>
            <TvShowsContextProvider>
              <Routes>
                <Route path="/movies/:id" element={<MovieDetailsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={ <Navigate to="/" /> } />
                <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                <Route path="/movies/upcoming" element={<MovieUpcomingPage/>} />            
                <Route path="/movies/playlist" element={ <PlaylistMoviesPage /> } />
                <Route path="/movies/top_movies" element={<TopMoviesPage/>} />
                <Route path="/movies/now_playing" element={<NowPlayingMoviePage/>} />
                <Route path="/actors/" element={ <ActorsPage /> } />
                <Route path="/actors/:id" element={ <ActorDetailsPage /> } />
                <Route path="/actors/favourites" element={ <FavouriteActorsPage /> } />
                <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
                <Route path="/reviews/:id" element={ <MovieReviewPage /> } /> 
                <Route path="/tv_shows/" element={ <TvShowPage /> } />
                <Route path="/tv_shows/:id" element={ <TvShowDetailsPage /> } />          
                <Route path="/tv_shows/top_tv" element={ <TopTvPage /> }/> 
                <Route path="/tv_shows/airing_today" element={ <AiringTvPage /> }/>
                <Route exact path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Routes>
            </TvShowsContextProvider>
          </ActorsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );