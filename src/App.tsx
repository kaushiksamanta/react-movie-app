import { Route, Switch } from 'react-router-dom';
import AllMoviesPage from './pages/AllMovies';
import NewMoviePage from './pages/NewMovie';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMoviesPage />
        </Route>
        <Route path="/new-movie">
          <NewMoviePage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
      <p>Disclaimer:- All the images used throughout the website are linked from unsplash.com, we do not host these images.</p>
    </Layout>
  );
}

export default App;

// import Todo from './components/Todo';

// function App() {
//   return (
//     <div>
//       <h1>My Todos</h1>
//       <Todo text="Learn react"/>
//       <Todo text="Learn Angular"/>
//       <Todo text="Learn Vue"/>
//     </div>
//   );
// }

// export default App;
