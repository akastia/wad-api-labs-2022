import React, { Fragment, useState } from "react";

export const TvShowsContext = React.createContext({
  favourites: [],
  addFav: (tv) => {},
  removeFav: (tv) => {},
});

const TvShowsContextProvider = (props) => {
  
  const [favourites, setFavourites] = useState( [] )
  

  const addToFavourites = (tv) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(tv.id)) {
      newFavourites.push(tv.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites( favourites.filter(
      (mId) => mId !== tv.id
    ) )
  };

  const favouritesValue = {
    favourites: favourites,
    addFav: addToFavourites,
    removeFav: removeFromFavourites,
  };

  return (
    <TvShowsContext.Provider value={favouritesValue}
    >
      <Fragment>{props.children}</Fragment>
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;