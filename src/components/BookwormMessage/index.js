import WormIcon from 'src/assets/images/Worm.gif';

import './style.scss';

function BookwormMessage({ text }) {
  return (
    <div className="bookworm__message">
      <img
        className="bookworm__message__img"
        src={WormIcon}
        alt="un vert vert avec des yeux"
      />
      <div className="bookworm__message__block">
        <p className="bookworm__message__block__text">{text}</p>
      </div>
    </div>
  );
}

export default BookwormMessage;
