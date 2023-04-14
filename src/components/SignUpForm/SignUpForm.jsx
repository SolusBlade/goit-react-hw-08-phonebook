import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './SignUpForm.module.css';
import { registerUser } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

    const user = { name, email, password };

    dispatch(registerUser(user));
    e.target.reset();
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>

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
          <NavLink
            className={s.btn}
            to="/goit-react-hw-08-phonebook/login"
          >
            Login
          </NavLink>
          <button className={s.btn} type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default memo(SignUpForm);
