import './style.css';

function Stats({
  totalKnowledge,
  totalClicks,
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
        <p className="stat__container__block__value">{totalClicks}</p>
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

export default Stats;
