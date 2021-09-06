import { useContext } from 'react';
import MovieList from '../components/movies/MovieList';
import FavoritesContext from '../store/favorites-context';

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MovieList movies={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;