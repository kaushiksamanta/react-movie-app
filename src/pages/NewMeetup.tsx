import NewMeetupForm, { IMeetupData } from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData: IMeetupData) => {
    fetch(
      'https://react-movies-app-41c26-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
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
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;