import classes from './MeetupItem.module.css';

export interface IMeetupItem {
  id: string;
  title: string;
  address: string;
  description: string;
  image: string;
}

const MeetupItem = (props: IMeetupItem) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;