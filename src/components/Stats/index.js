// npm imports
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// assets imports
import './style.css';

export default function Stats({ isOpen }) {
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  const knowledgePerSecond = useSelector((state) => state.knowledge.knowledgePerSecond);
  const knowledgePerClick = useSelector((state) => state.knowledge.knowledgePerClick);
  const totalOfClicks = useSelector((state) => state.knowledge.totalOfClicks);

  return (
    <div className={isOpen ? 'stats__container' : 'stats__container-hidden'}>
      {/* TODO map sur les datas qu'on aura fetch */}
      <div className="stats__container__block">
        <p className="stat__container__block__name">Total knowledge earned:</p>
        <p className="stat__container__block__value">{knowledge}</p>
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
