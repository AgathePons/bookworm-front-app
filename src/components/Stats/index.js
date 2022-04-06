// npm imports
import PropTypes from 'prop-types';

// assets imports
import './style.css';

export default function Stats({
  totalKnowledge,
  totalOfClicks,
  knowledgePerSecond,
  knowledgePerClick,
  isOpen,
}) {
  return (
    <div className={isOpen ? 'stats__container' : 'stats__container-hidden'}>
      {/* TODO map sur les datas qu'on aura fetch */}
      <div className="stats__container__block">
        <p className="stat__container__block__name">Total knowledge earned:</p>
        <p className="stat__container__block__value">{totalKnowledge}</p>
        <p className="stat__container__block__name">Total clicks:</p>
        <p className="stat__container__block__value">{totalOfClicks}</p>
        <p className="stat__container__block__name">Knowledge per second:</p>
        <p className="stat__container__block__value">{knowledgePerSecond}</p>
        <p className="stat__container__block__name">Knowledge per click:</p>
        <p className="stat__container__block__value">{knowledgePerClick}</p>

      </div>
      <div className="stats__container__upgrades">
        <p className="stat__container__upgrades__name">Upgrades bought:</p>
        {/* TODO map sur les datas qu'on aura fetch */}
        <div className="stat__container__upgrades__items">
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
        </div>
      </div>
    </div>
  );
}

Stats.propTypes = {
  totalKnowledge: PropTypes.number.isRequired,
  totalOfClicks: PropTypes.number.isRequired,
  knowledgePerClick: PropTypes.number.isRequired,
  knowledgePerSecond: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
