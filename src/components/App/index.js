// npm imports
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// action creators import
import { setDesktopFalse, setDesktopTrue } from 'src/actions/desktop';
import { checkUser, saveUserStats, disconnectUser } from 'src/actions/user';
import useInterval from '../../hooks/useInterval';

// components import
import Header from '../Header';
import Book from '../Book';
import Container from '../Container';
import LoginModal from '../loginModal';

// assets import
import './style.scss';

function App() {
  const dispatch = useDispatch();
  const {
    isLogged,
    isRegister,
  } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isKonami, setIsKonami] = useState(false);

  useInterval(() => {
    if (isLogged) {
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
    function handleResize() {
      if (window.innerWidth >= 1366) {
        dispatch(setDesktopTrue());
      }
      else if (window.innerWidth <= 1366) {
        dispatch(setDesktopFalse());
      }
    }

    window.addEventListener('resize', handleResize);
  });

  const pressed = [];
  const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      pressed.push(e.key);
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
      if (pressed.join('') === secretCode.join('')) {
        setIsKonami(true);
      } else {
        setIsKonami(false);
      }
    });
  });

  useEffect(() => {
    if (window.innerWidth >= 1366) {
      dispatch(setDesktopTrue());
    }
    else if (window.innerWidth <= 1366) {
      dispatch(setDesktopFalse());
    }
  }, []);

  useEffect(() => {
    dispatch(checkUser());
    if (isLogged) {
      setIsModalOpen(true);
    }
  }, [isLogged]);

  return (
    <div className={isKonami ? 'app konami ' : 'app'}>
      <div className="app__header">
        <Header />
        <Book />
        {(!isRegister && isLogged && isModalOpen) && <LoginModal setIsModalOpen={setIsModalOpen} />}
      </div>
      <Container visible={visible} setVisible={setVisible} handleClick={handleVisible} />
    </div>
  );
}

export default App;
