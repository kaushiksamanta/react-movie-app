import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Movies App</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Movies</Link>
          </li>
          <li>
            <Link to='/new-movie'>Add New Movie</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;