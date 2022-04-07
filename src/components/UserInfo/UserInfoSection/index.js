import { useSelector } from 'react-redux';

function UserInfoSection({ modify }) {
  const { pseudo, email } = useSelector((state) => state.user);
  return (
    <>
      <div className="user__info__title">user information:</div>
      <ul className="user__info__list">
        <li className="user__info__list__info">pseudo: {`${pseudo}`}</li> {modifyIcon}
        <li className="user__info__list__info">email: {`${email}`}</li>
      </ul>
      <button className="user__info__modify" type="button">Modifier</button>
    </>
  );
}

export default UserInfoSection;
