import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getFirstSentence, getRandomSentence } from '../../apiRequests';

import useInterval from '../../hooks/useInterval';

import BookwormMessage from '../BookwormMessage';

import './style.css';

export default function Bookworm({ isOpen }) {
  const [messages, setMessages] = useState(['']);

  useInterval(() => {
    getRandomSentence(messages, setMessages);
  }, 1000 * 60 * 15);

  useEffect(() => {
    getFirstSentence(setMessages);
  }, []);

  return (
    <div className={isOpen ? 'bookworm' : 'bookworm-hidden'}>
      {messages.map((e) => <BookwormMessage key={e.id} text={e.text} />)}
    </div>
  );
}

Bookworm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
