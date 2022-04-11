// npm imports
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// action creators import
import { checkUser } from 'src/actions/user';

// components import
import Header from '../Header';
import Book from '../Book';
import Container from '../Container';

// assets import
import './style.css';

function App() {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const handleVisible = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    dispatch(checkUser());
  }, []);

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
