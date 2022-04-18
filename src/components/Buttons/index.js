// npm import
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components import
import Modal from 'src/components/Modal';
import { readNewNotification } from 'src/actions/bookworm';

// actions import

// assets import
import './style.scss';

export default function Buttons() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const isDesktop = useSelector((state) => state.desktop.isDesktop);
  const isLogged = useSelector((state) => state.user.isLogged);
  const newNotification = useSelector((state) => state.bookworm.newNotification);

  function handleClick(e) {
    setTitle(e.currentTarget.value);
    setIsOpen(true);
    if (title === 'bookworm') {
      dispatch(readNewNotification());
    }
  }

  useEffect(() => {
    if (isLogged) {
      setIsOpen(false);
    }
  }, [isLogged]);

  return (
    <div className="buttons">
      <div className="buttons__block">
        <button onClick={handleClick} type="button" className={newNotification ? 'buttons__a notification' : 'buttons__a'} value="bookworm">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M56,44v-4h-4v4h-4v-8h-4v8h-4v-8h4v-4h-4v-4h4v-4h4V12h-4V8h-4V4h-4V0H16v4h-4v4H8v4H4v12h4v4h4v8H8v16h4v4h4v4h4v4h28v-4h8v-4h4V44H56z M20,20h-4v-8h4V20z M34,20h-4v-8h4V20z" /></svg>
        </button> {/* change "value" to modify modal's title */}
        <button onClick={handleClick} type="button" className="buttons__b" value="user">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M59.586 24.389v-4.444h-4.414V15.5H8.828v4.445H4.414v4.444H0v22.222h4.414v4.445h4.414V55.5h46.344v-4.443h4.414v-4.445H64V24.389h-4.414zM26.483 37.722h-4.414v-4.443h-8.828v4.443H8.828v-4.443h4.414v-4.445h8.828v4.445h4.414v4.443zm8.828 13.335H28.69v-6.668h6.621v6.668zm19.861-13.335h-4.413v-4.443h-8.828v4.443h-4.413v-4.443h4.413v-4.445h8.828v4.445h4.413v4.443z" /></svg>
        </button>
      </div>
      <div className="buttons__block">
        {isDesktop ? <button onClick={handleClick} type="button" className="buttons__c" value="info"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M59 21V11h-6V5H43V0H21v5H11v6H5v10H0v22h5v10h6v6h10v5h22v-5h10v-6h6V43h5V21h-5zM27 10h10v11H27V10zm16 43H21v-5h6V32h-6v-5h16v21h6v5z" /></svg></button>
          : <button onClick={handleClick} type="button" className="buttons__c" value="shop"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M49.777 11.111V4H64v7.111H49.777zM7.111 18.222v7.111h7.111v-7.111H7.111zm14.222 0v7.111h7.112v-7.111h-7.112zm14.223 0v7.111h7.11v-7.111h-7.11zM7.111 32.444v7.11h7.111v-7.11H7.111zm14.222 0v7.11h7.112v-7.11h-7.112zm14.223 0v7.11h7.11v-7.11h-7.11zM7.111 60.89v-7.112h7.111v7.112H7.111zm28.445 0v-7.112h7.11v7.112h-7.11zm14.221-49.779v35.556H7.111v-7.112H0V11.111h49.777z" /></svg></button>}

        <button onClick={handleClick} type="button" className="buttons__d" value="stats">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M60.632 37.393V27.327h-3.368V17.26h-3.368v-3.355H40.421c-.119.723-.13 2.614 0 3.355l-10.105-.088c-.59.164-1.566.088-2.305.088h-4.433c.053-.176-.012-.076.089-.176.004-.889.167-2.487-.089-3.179H10.105v3.355H6.736v10.067H3.367v10.066H-.001v6.801h3.368v3.354h3.369v3.356H16.93c.004-.907.173-2.56-.088-3.268.658-.242 2.571-.097 3.457-.089-.09-.768.074-2.353-.089-3.267.658-.242 2.571-.097 3.457-.088v-4.504c0-.666.1-1.605-.089-2.119.32-.117.877-.089 1.331-.089h14.36c.329 0 .88-.071 1.064.089h.087c.067.105-.058.068-.087.088v.088h.087v.088h-.087v4.68c0 .523.059 1.337 0 1.59.584.211 1.649.089 2.392.089.314 0 .802-.062.976.088h.088c-.087.215-.088.547-.088.883v2.384h2.481c.299 0 .727-.054.887.089h.088c-.086.215-.088.548-.088.883v2.385h10.194v-3.356h3.368c-.005-.871-.151-2.704.088-3.354h3.28v-6.801h-3.367zm-40.333-9.978h-3.457v3.355h-3.369v-3.532h-3.28v-3.09h3.28v-3.356h3.545v3.444h3.28l.001 3.179zm33.683 0h-3.367v3.443h-3.458v-3.443h-3.368v-3.356h3.368v-3.355h3.37v3.355h3.455v3.356zm-6.735 0h3.28v-3.356h-3.28v3.356z" /></svg>
        </button>
      </div>
      <Modal title={title} setIsOpen={setIsOpen} isOpen={isOpen} isDesktop={isDesktop} />
    </div>
  );
}
