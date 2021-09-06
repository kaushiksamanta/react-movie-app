import MovieItem, { IMovieItem } from './MovieItem';
import classes from './MovieList.module.css';

export interface IMovieList{
  movies: IMovieItem[];
}

const MovieList = (props: IMovieList) => {
  return (
    <ul className={classes.list}>
      {props.movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          image={movie.image}
          title={movie.title}
          description={movie.description}
        />
      ))}
    </ul>
  );
}

export default MovieList;