import HomeIcon from '@mui/icons-material/Home';
import s from './MainNav.module.css';
import UserData from 'components/UserData/UserData';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';



const MainNav = () => {

  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <header className={s.header}>
      <a href="/goit-react-hw-08-phonebook/contacts">
        <HomeIcon className={s.home} />
      </a>
      {isLoggedIn && <UserData />}
    </header>
  );
};

export default MainNav;
