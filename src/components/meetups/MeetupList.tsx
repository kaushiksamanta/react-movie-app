import MeetupItem, { IMeetupItem } from './MeetupItem';
import classes from './MeetupList.module.css';

export interface IMeetupList{
  meetups: IMeetupItem[];
}

function MeetupList(props: IMeetupList) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;