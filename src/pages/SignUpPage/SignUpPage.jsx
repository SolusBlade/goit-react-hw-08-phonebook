import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import s from './SignUpPage.module.css';

const SignUpPage = () => {

  return (
    <div>
      <span className={s.title}>
        <PhoneAndroidIcon className={s.ico} /> Phonebook
      </span>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
