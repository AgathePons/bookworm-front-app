import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { getFirstSentence, getRandomSentence } from '../../actions/bookworm';

import useInterval from '../../hooks/useInterval';

import BookwormMessage from '../BookwormMessage';

import './style.scss';

export default function Bookworm({ isOpen }) {
  const dispatch = useDispatch();

  const { messages } = useSelector((state) => state.bookworm);
  const { isLogged } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getFirstSentence());
  }, []);

  useInterval(() => {
    if (isLogged) {
      dispatch(getRandomSentence());
    }
  }, 1000 * 60 * 15);

  return (
    <div className={isOpen ? 'bookworm' : 'bookworm-hidden'}>
      {messages.map((e) => <BookwormMessage key={uuidv4()} text={e.text} />)}
    </div>
  );
}

Bookworm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
