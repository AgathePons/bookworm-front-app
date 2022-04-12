import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addKnowledgePerClick } from 'src/actions/knowledge';
import { useIntervalWhen } from 'rooks';

import FloatingNumber from 'src/components/FloatingNumber';

import book from 'src/assets/images/Book.gif';

import './style.scss';

function Book() {
  const dispatch = useDispatch();
  const [floating, setFloating] = useState([]);
  const { knowledgePerClick } = useSelector((state) => state.knowledge);

  useIntervalWhen(() => {
    if (floating.length !== 0) {
      const floatingCopy = [...floating];
      floatingCopy.pop();
      setFloating(floatingCopy);
    }
  }, 2500, floating.length !== 0);

  const handleBookClick = (e) => {
    const newFloating = [...floating];

    if (newFloating.length === 10) newFloating.pop();

    newFloating.unshift({ x: e.clientX, y: e.clientY, value: knowledgePerClick });
    setFloating(newFloating);

    dispatch(addKnowledgePerClick());
  };

  const createFloating = (arr) => {
    if (arr.length === 0) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return arr.map((elem) => <FloatingNumber x={elem.x} y={elem.y} value={elem.value} />);
  };

  return (
    <div className="book" onClick={handleBookClick}>
      {createFloating(floating)}
      <div className="book__visual">
        <img className="book__visual__img" src={book} alt="livre à cliquer" />
      </div>
    </div>
  );
}

export default Book;
