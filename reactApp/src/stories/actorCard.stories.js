import React from "react";
import ActorCard from "../components/actorCard";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import ActorsContextProvider from "../contexts/actorsContext";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


export default {
  title: "Home Page/ActorCard",
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorsContextProvider>{Story()}</ActorsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      movie={SampleActor}
      action={(actor) => <AddToFavouritesIcon actor={actor} />}
    //   taging={(movie) => <AddToPlaylistIcon movie={movie}/>}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoProfile = { ...SampleActor, profile_path: undefined };
  return (
    <ActorCard
      actor={sampleNoProfile}
      action={(actor) => <AddToFavouritesIcon actor={actor} />}
    //   taging={(movie) => <AddToPlaylistIcon movie={movie}/>}
    />
  );
};
Exceptional.storyName = "exception";
