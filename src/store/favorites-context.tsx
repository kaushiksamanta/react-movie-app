import { createContext, useState } from 'react';
import { IMovieItem } from '../components/movies/MovieItem';

interface IFavoritesContextProviderProps {
  children:  React.ReactNode;
}

interface IFavoritesContext {
  favorites: IMovieItem[];
  totalFavorites: number;
  addFavorite: (favoriteMovie: IMovieItem) => void;
  removeFavorite: (movieId: string) => void;
  itemIsFavorite: (movieId: string) => boolean;
}

const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMovie: IMovieItem) => {},
  removeFavorite: (movieId: string) => {},
  itemIsFavorite: (movieId: string) => { return false }
});

export const FavoritesContextProvider = (props: IFavoritesContextProviderProps) => {
  const [userFavorites, setUserFavorites] = useState<IMovieItem[]>([]);

  const addFavoriteHandler = (favoriteMovie: IMovieItem) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMovie);
    });
  }

  const removeFavoriteHandler = (movieId: string) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(movie => movie.id !== movieId);
    });
  }

  const itemIsFavoriteHandler = (movieId: string) => {
    return userFavorites.some(movie => movie.id === movieId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;