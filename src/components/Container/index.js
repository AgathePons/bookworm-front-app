import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// components import
import QuickShop from '../QuickShop';
import Buttons from '../Buttons';

// assets import
import './style.css';

export default function Container({ visible, setVisible, handleClick }) {
  const isDesktop = useSelector((state) => state.desktop.isDesktop);
  const isLogged = useSelector((state) => state.user.isLogged);
  return (
    <div className="container">
      <Buttons />
      {(!isDesktop && isLogged)
      && <QuickShop visible={visible} setVisible={setVisible} handleClick={handleClick} />}
    </div>
  );
}

Container.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
