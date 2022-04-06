import './style.css';

function BookwormMessage({ text }) {
  return (
    <div className="bookworm__message">
      <img
        className="bookworm__message__img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0qCDG2RAIWCuCB3N6ml2f__w1F3gE9OJFQ&usqp=CAU"
        alt="un vert vert avec des yeux"
      />
      <div className="bookworm__message__block">
        <p className="bookworm__message__block__text">{text}</p>
      </div>
    </div>
  );
}

export default BookwormMessage;
