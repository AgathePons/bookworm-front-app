function UserInfoSection({ modify }) {
  return (
    <>
      <div className="user__info__title">user information:</div>
      <ul className="user__info__list">
        <li className="user__info__list__info">pseudo: cbiglemon</li> {modifyIcon}
        <li className="user__info__list__info">email: cbiglelmon</li>
      </ul>
      <button className="user__info__modify" type="button" onClick={modify}>Modifier</button>
    </>
  );
}

export default UserInfoSection;
