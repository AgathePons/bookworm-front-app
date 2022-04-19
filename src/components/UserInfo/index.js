import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIntervalWhen } from 'rooks';
import { deleteAccount, saveUserStats, disconnectUser } from 'src/actions/user';
import './style.scss';

function UserInfo() {
  const { pseudo, email } = useSelector((state) => state.user);
  const [isDeleteClicked, setDeleteClicked] = useState(false);
  const [isSaveClicked, setSaveClicked] = useState(false);
  const [timer, setTimer] = useState(60);
  const dispatch = useDispatch();

  useIntervalWhen(() => {
    setSaveClicked(false);
  }, 1000 * 60, isSaveClicked);

  useIntervalWhen(() => {
    setTimer(timer - 1);
  }, 1000, isSaveClicked);

  function handleDeleteAccount() {
    dispatch(deleteAccount());
  }

  function handleDeleteClick() {
    setDeleteClicked(true);
  }

  function handleRefuseClick() {
    setDeleteClicked(false);
  }

  function handleSave() {
    setSaveClicked(true);
    setTimer(60);
    dispatch(saveUserStats());
  }

  function handleDisconnect() {
    dispatch(disconnectUser());
  }

  return (
    <>
      <div className="user__info">
        <div className="user__info__title">informations:</div>
        <ul className="user__info__list">
          <li className="user__info__list__info">pseudo: {`${pseudo}`}</li>
          <li className="user__info__list__info">email: {`${email}`}</li>
        </ul>
      </div>
      <div className="user__form user__form__save">
        <button className={isSaveClicked ? 'user__form__save__button user__form__save__button--clicked' : 'user__form__save__button'} type="button" onClick={isSaveClicked ? null : handleSave}>save</button>
        {isSaveClicked && <p className="game-saved-message">Game Saved!<br />You will be able to save again in {timer}</p>}
        <button className="user__form__disconnect__button" type="button" onClick={handleDisconnect}>disconnect</button>
      </div>
      <div className="user__form user__form__delete">
        <p className="user__form__warning">You will miss your little Bookworm... 😦</p>
        {
          isDeleteClicked
            ? (
              <div className="user__form user__form__delete__confirm">
                <p className="user__form__warning">You're about to delete your account FOREVER !</p>
                <div className="confirm-refuse-button">
                  <button type="button" className="button-refuse" onClick={handleRefuseClick}>Uuuh maybe I will stay</button>
                  <button type="button" className="button-confirm" onClick={handleDeleteAccount}>Yes, I know! Goodbye</button>
                </div>
              </div>
            )
            : <button type="button" className="user__form__delete__button" onClick={handleDeleteClick}>delete account</button>
        }
      </div>
    </>
  );
}

export default UserInfo;
