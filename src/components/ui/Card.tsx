import classes from './Card.module.css';

interface IcardProps {
  children: React.ReactNode;
}

const Card = (props: IcardProps) => {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;