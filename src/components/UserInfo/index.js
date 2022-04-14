import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount, saveUserStats, disconnectUser } from 'src/actions/user';
import './style.scss';

function UserInfo() {
  const { pseudo, email } = useSelector((state) => state.user);
  const [isDeleteClicked, setDeleteClicked] = useState(false);
  const dispatch = useDispatch();

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
        <button className="user__form__save__button" type="button" onClick={handleSave}>save</button>
        <button className="user__form__disconnect__button" type="button" onClick={handleDisconnect}>disconnect</button>
      </div>
      <div className="user__form user__form__delete">
        {
          isDeleteClicked
            ? (
              <div className="user__form user__form__delete">
                <p className="user__form__warning">You're about to delete your account FOREVER !</p>
                <div className="confirm-refuse-button">
                  <button type="button" className="confirm-button" onClick={handleDeleteAccount}>yes</button>
                  <button type="button" className="refuse-button" onClick={handleRefuseClick}>no</button>
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
