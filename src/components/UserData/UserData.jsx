import { useDispatch, useSelector } from 'react-redux';
import s from './UserData.module.css';
import { selectorName } from 'redux/auth/authSelectors';
import { logOutUser } from 'redux/auth/authOperations';

const UserData = () => {
  const name = useSelector(selectorName);
  const dispatch = useDispatch();

  return (
    <div className={s.wrap}>
      <p className={s.text}>{name}</p>
      <button className={s.btn} onClick={() => dispatch(logOutUser())}>
        Log Out
      </button>
    </div>
  );
};

export default UserData;
