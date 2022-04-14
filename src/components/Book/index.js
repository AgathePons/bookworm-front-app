import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addKnowledgePerClick } from 'src/actions/knowledge';
import { useIntervalWhen } from 'rooks';
import { v4 as uuidv4 } from 'uuid';

import FloatingNumber from 'src/components/FloatingNumber';

import book from 'src/assets/images/Book.gif';
import convertToReadable from '../../selectors';

import './style.scss';

function Book() {
  const dispatch = useDispatch();
  const [floating, setFloating] = useState([]);
  const knowledgePerClick = useSelector((state) => state.knowledge.knowledgePerClick);

  useIntervalWhen(() => {
    if (floating.length !== 0) {
      const floatingCopy = [...floating];
      floatingCopy.shift();
      setFloating(floatingCopy);
    }
  }, 1000, floating.length !== 0);

  const handleBookClick = (e) => {
    const newFloating = [...floating];

    if (newFloating.length === 10) newFloating.shift();
    newFloating.push({
      key: uuidv4(), x: e.clientX, y: e.clientY, value: knowledgePerClick,
    });
    setFloating(newFloating);

    dispatch(addKnowledgePerClick());
  };

  const createFloating = (arr) => {
    if (arr.length === 0) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return arr.map(
      (elem) => (
        <FloatingNumber
          key={elem.key}
          x={elem.x}
          y={elem.y}
          value={convertToReadable(elem.value)}
        />
      ),
    );
  };

  return (
    <>
      {createFloating(floating)}
      <div className="book" onClick={handleBookClick}>
        <div className="book__visual">
          <img className="book__visual__img" src={book} alt="livre à cliquer" />
        </div>
      </div>
    </>
  );
}

export default Book;
