import PropTypes from 'prop-types';

export default function Currency({ counter }) {
  return (
    <div className="currency">{counter}</div>
  );
}

Currency.propTypes = {
  counter: PropTypes.string.isRequired,
};
