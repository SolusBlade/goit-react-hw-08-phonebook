import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import s from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <span className={s.title}>
        <PhoneAndroidIcon className={s.ico} /> Phonebook
      </span>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
