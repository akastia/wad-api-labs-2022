import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  
  const [favourites, setFavourites] = useState( [] )
  

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (actor) => {
    setFavourites( favourites.filter(
      (mId) => mId !== actor.id
    ) )
  };

  

  return (
    <ActorsContext.Provider
    value={{
      favourites,
      addToFavourites,
      removeFromFavourites,
    }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;