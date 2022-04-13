import PropTypes from 'prop-types';
import './style.scss';

export default function FloatingNumber({ x, y, value }) {
  return (
    <p
      className="floating-number"
      style={{
        position: 'absolute',
        top: `calc(${y}px - 30px)`,
        left: `calc(${x}px - 10px)`,
        zIndex: '1',
        animation: 'floating_fade 1.5s cubic-bezier(0.17, 0.84, 0.44, 1) 0s 1',
      }}
    >
      +{value}
    </p>
  );
}

FloatingNumber.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};
