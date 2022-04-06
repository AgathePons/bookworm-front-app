import './style.css';

const UserInfo = () =>  {
  return (
    <>
      <div className="user__info">
        <div className="user__info__title">user information:</div>
          <ul className="user__info__list">
            <li className="user__info__list__info">pseudo: cbiglemon</li>
            <li className="user__info__list__info">email: cbiglelmon</li>
          </ul>
        </div>
      <div className="user__form">
        <form className="user__form__save">
          <button className="user__form__save__button" type="submit">save</button>
        </form>
        <form className="user__form__disconnect">
          <button className="user__form__disconnect__button" type="submit">disconnect</button>
        </form>
      </div>
    </>
  );
}

export default UserInfo;
