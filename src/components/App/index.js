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

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="app">
      <div className="app__header">
        <Header />
        <Book />
      </div>
      <Container visible={visible} handleClick={handleVisible} />
    </div>
  );
}

export default App;
