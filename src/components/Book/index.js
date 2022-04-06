import { useDispatch } from 'react-redux';
import { addKnowledgePerClick} from 'src/actions/knowledge';

import book from '../../assets/images/Book.gif';

import './style.css';

function Book() {
  const dispatch = useDispatch();

  console.log('salut!');

  const handleBookClick = () => {
    dispatch(addKnowledgePerClick());
  };

  return (
    <div className="book" onClick={handleBookClick}>
      <div className="book__visual">
        <img className="book__visual__img" src={book} alt="livre à cliquer" />
      </div>
    </div>
  );
}

export default Book;
