import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './LoginForm.module.css';
import { loginUser } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = { email, password };

    dispatch(loginUser(user));
    e.target.reset();
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            title="Entry your email"
            required
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          <span>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            title="Enter password"
            required
            onChange={handleChange}
          />
        </label>
        <div className={s.btnWrap}>
          <button className={s.btn} type="submit">
            Login
          </button>
          <NavLink className={s.btn} to="/goit-react-hw-08-phonebook/register">
            Register
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default memo(LoginForm);
