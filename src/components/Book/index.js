import book from '../../assets/images/Book.gif';

import './style.css';

const Book = ({ click }) => {
  return (
    <div className="book" onClick={click}>
      <div className="book__visual">
        <img className="book__visual__img" src={book} alt="livre à cliquer" />
      </div>
    </div>
  );
}

export default Book;
