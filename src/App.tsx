import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
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