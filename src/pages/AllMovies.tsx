import { useState, useEffect } from 'react';
import { IMovieItem } from '../components/movies/MovieItem';
import MovieList from '../components/movies/MovieList';

const AllMoviesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState<IMovieItem[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-movies-app-41c26-default-rtdb.firebaseio.com/movies.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const movies = [];

        for (const key in data) {
          const movie = {
            id: key,
            ...data[key]
          };

          movies.push(movie);
        }

        setIsLoading(false);
        setLoadedMovies(movies);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Movies</h1>
      <MovieList movies={loadedMovies} />
    </section>
  );
}

export default AllMoviesPage;