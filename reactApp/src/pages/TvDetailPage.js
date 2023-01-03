import React from "react";
import { useParams } from 'react-router-dom';
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvShowPage";
import { getTvShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TvShowDetailsPage = (props) => {
  const { id } = useParams();

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTvShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TvDetails tv={tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default TvShowDetailsPage;