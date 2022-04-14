import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// components import
import QuickShop from '../QuickShop';
import Buttons from '../Buttons';

// assets import
import './style.css';

export default function Container({ visible, handleClick }) {
  const isDesktop = useSelector((state) => state.desktop.isDesktop);
  return (
    <div className="container">
      <Buttons />
      {!isDesktop && <QuickShop visible={visible} handleClick={handleClick} />}
    </div>
  );
}

Container.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
