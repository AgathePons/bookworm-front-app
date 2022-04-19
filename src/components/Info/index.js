import PropTypes from 'prop-types';

import './style.scss';

export default function Info({ isOpen }) {
  return (
    <div className={isOpen ? 'info__container' : 'info__container-hidden'}>
      <h2 className="info__container__title">Merci la dream team</h2>
      <p className="info__container__text">
        Eh ouai, merci à nous pour commencer, de nous être supportés tout au long
        de ces 4 semaines (c'était pas gagné !!), d'avoir accompli autant tous ensemble&nbsp;!<br />
        Merci pour les sessions de team building sur Sea of Thieves, pour les
        conflits git, les bugs cheloux, les fins de journée au bout du rouleau,
        et tout et tout...<br />
        const dreamTeam = &#123;<br />
        &emsp;Yoan: "Et si ... ?",<br />
        &emsp;Agathe: "C'est pas dans le MVP!",<br />
        &emsp;Thibaud: "J'étais en train de me dire ...",<br />
        &emsp;Philémon: "C'est qui Eli??",<br />
        &#125;
      </p>
      <h2 className="info__container__title">Merci Eli</h2>
      <p className="info__container__text">
        Big bisou à notre pixel artiste, pour le book et le bookworm animé&nbsp;!<br />
        Merci de nous avoir fourni ses assests de qualitay,
        le bookworm est vraiment trop choupiiiiii&nbsp;!!!
      </p>
      <h2 className="info__container__title">Merci O'clock</h2>
      <p className="info__container__text">
        Merci O'clock, et spécialement tous nos profs ! Noé (chartreuse forever),
        Ben (on sait pour votre bromance avec Yoan),
        Nico, Olivier, Vincent, Alexis, Sion, Clem, JS (et sa démo de nunchaku), BigYann
        (qu'on a jamais vu mais dont on a apprécié le travil sur O'blog)...???
      </p>
      <h2 className="info__container__title">Big up pour Étienne et Gauthier</h2>
      <p className="info__container__text">
        Cimer pour l'accompagnement tout au long de cette apthéose,
        c'était pas de tout repos, mais quelle aventure.<br />
        Spécial thanks à Gauthier pour avoir démystifié le bug de la
        3è dimension avec nos floating numbers&nbsp;!&nbsp;😀
      </p>
    </div>
  );
}

Info.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
