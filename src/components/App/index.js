// npm imports
import { useState } from 'react';
import { useSelector } from 'react-redux';

// custom hooks import

// components import 
import Header from '../Header';
import Book from '../Book';
import Container from '../Container';

// assets import
import './style.css';

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [idleCount, setIdleCount] = useState(10);
  const [visible, setVisible] = useState(false);
  const [playerId, setPlayerId] = useState(0);

  const handlePlayerId = (id) => {
    setPlayerId(id);
  }

  const handleIncrement = () => {
    setCount(count + increment);
  }

  const handleVisible = () => {
    setVisible(!visible);
  }

  return (
    <div className="app">
      <div className="app__header">
        <Header count={count} setCount={setCount} idleCount={idleCount} />
        <Book click={handleIncrement} />
      </div>
      <Container visible={visible} handleClick={handleVisible} handlePlayerId={handlePlayerId} />
    </div>
  );
}

export default App;
