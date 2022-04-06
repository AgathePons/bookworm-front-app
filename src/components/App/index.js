// npm imports
import { useState } from 'react';

// custom hooks import

// components import
import Header from '../Header';
import Book from '../Book';
import Container from '../Container';

// assets import
import './style.css';

function App() {
  const [visible, setVisible] = useState(false);
  const [playerId, setPlayerId] = useState(0);

  const handlePlayerId = (id) => {
    setPlayerId(id);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="app">
      <div className="app__header">
        <Header />
        <Book />
      </div>
      <Container visible={visible} handleClick={handleVisible} handlePlayerId={handlePlayerId} />
    </div>
  );
}

export default App;
