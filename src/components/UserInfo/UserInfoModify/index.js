import './style.css';

function UserInfoModify() {
  return (
    <form className="user__info__form">
      <input type="email" placeholder="new username" />
      <input type="text" placeholder="new email" />
    </form>
  );
}

export default UserInfoModify;
