import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMovieForm.module.css';

export interface IMovieData {
  title: string;
  image: string;
  description: string;
}

export interface INewMovieFormProps {
  onAddMovie: (movie: IMovieData) => void;
}

const NewMovieForm = (props: INewMovieFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;

    const movieData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    } as IMovieData;

    props.onAddMovie(movieData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Movie Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Movie Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            data-rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Movie</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMovieForm;
