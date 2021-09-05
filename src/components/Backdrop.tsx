interface IBackdropProps {
  onClick: () => void;
}

const Backdrop = (props: IBackdropProps) => {
  return (
    <div className="backdrop" onClick={props.onClick}></div>
  );
}

export default Backdrop;