import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

interface ITodoProps {
  text: string;
}

const Todo = (props: ITodoProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showModalHandler = () => {
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
    <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
      <button className='btn' onClick={showModalHandler}>
        Delete
      </button>
    </div>
    {showModal && <Backdrop onClick={closeModalHandler} />}
    {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
  </div>
  )
}

export default Todo;