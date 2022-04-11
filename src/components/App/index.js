// npm imports
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// custom hooks import
import useInterval from '../../hooks/useInterval';

// action creators import
import { checkUser } from 'src/actions/user';
import { saveUserStats } from 'src/actions/user';

// components import
import Header from '../Header';
import Book from '../Book';
import Container from '../Container';

// assets import
import './style.css';

function App() {
  const {
    isLogged
  } = useSelector((state) => state.user);

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useInterval(() => {
    if (isLogged) {
      dispatch(saveUserStats());
    }
  }, 1000 * 60);

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
