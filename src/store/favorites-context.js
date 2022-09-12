import { createContext, useState } from "react";

// Helps with autocomplete and should match the const context within the FavoritesContext function below
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

// directly export the function
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavorite_Handler(favoriteMeetup) {
    setUserFavorites((previousFavorites) => {
      return previousFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavorite_Handler(meetupId) {
    setUserFavorites((previousFavorites) => {
      return previousFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function isFavorite_Handler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavorite_Handler,
    removeFavorite: removeFavorite_Handler,
    isFavorite: isFavorite_Handler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

// makes the context autocomplete work when in other files using the context
export default FavoritesContext;
