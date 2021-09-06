import NewMovieForm, { IMovieData } from '../components/movies/NewMovieForm';
import { useHistory } from 'react-router-dom';

const NewMoviePage = () => {
  const history = useHistory();

  const addMovieHandler = (movieData: IMovieData) => {
    fetch(
      'https://react-movies-app-41c26-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movieData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Movie</h1>
      <NewMovieForm onAddMovie={addMovieHandler}/>
    </section>
  );
}

export default NewMoviePage;