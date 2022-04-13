import PropTypes from 'prop-types';
import convertToReadable from '../../selectors';

export default function Currency({ counter }) {
  const readableCounter = convertToReadable(counter);
  return (
    <div className="currency">{readableCounter}</div>
  );
}

Currency.propTypes = {
  counter: PropTypes.number.isRequired,
};
