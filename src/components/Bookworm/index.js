import { useState, useEffect } from 'react';

import { getFirstSentence, getRandomSentence } from '../../apiRequests';

import useInterval from '../../hooks/useInterval';

import BookwormMessage from '../BookwormMessage';

import './style.css';


const Bookworm = ({ isOpen }) => {
  const [messages, setMessages] = useState([''])

  useInterval(() => {
    getRandomSentence(messages, setMessages)
  }, 1000 * 60 * 15);

  useEffect(() => {
    getFirstSentence(setMessages);
  }, []);

  return (
    <div className={isOpen ? "bookworm" : "bookworm-hidden"}>
      {messages.map((e) => <BookwormMessage key={e.id} text={e.text} />)}
    </div>
  );
}

export default Bookworm;
