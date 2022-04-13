// npm imports
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// custom hooks import

// action creators import
import { checkUser, saveUserStats, disconnectUser } from 'src/actions/user';
import useInterval from '../../hooks/useInterval';

// components import
import Header from '../Header';
import Book from '../Book';
import Container from '../Container';
import LoginModal from '../loginModal';

// assets import
import './style.css';

function App() {
  const dispatch = useDispatch();
  const {
    isLogged,
  } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useInterval(() => {
    if (isLogged) {
      console.log('je save');
      dispatch(saveUserStats());
    }
  }, 1000 * 60);

  const handleVisible = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const onWindowCloseOrRefresh = () => {
      dispatch(disconnectUser());
    };

    window.addEventListener('beforeunload', onWindowCloseOrRefresh);
    return () => {
      window.removeEventListener('beforeunload', onWindowCloseOrRefresh);
    };
  }, []);

  useEffect(() => {
    dispatch(checkUser());
    if (isLogged) {
      setIsModalOpen(true);
    }
  }, [isLogged]);

  return (
    <div className="app">
      <div className="app__header">
        <Header />
        <Book />
        {(isLogged && isModalOpen) && <LoginModal setIsModalOpen={setIsModalOpen} />}
      </div>
      <Container visible={visible} handleClick={handleVisible} />
    </div>
  );
}

export default App;
