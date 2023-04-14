import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MainNav from './MainNav/MainNav';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { selectorIsLoggedIn, selectorToken } from 'redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';
import axios from 'axios';

const PrivateRoute = ({
  component,
  redirectTo = '/goit-react-hw-08-phonebook/login',
}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({
  component,
  redirectTo = '/goit-react-hw-08-phonebook/contacts',
}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const token = useSelector(selectorToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(getCurrentUser(token));
    }
  }, [token, dispatch]);

  return (
    <>
      <MainNav />
      <Routes>
        <Route
          path="/goit-react-hw-08-phonebook/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route
          path="/goit-react-hw-08-phonebook/login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={<PublicRoute component={<SignUpPage />} />}
        />
        <Route
          path="*"
          element={<Navigate to="/goit-react-hw-08-phonebook/contacts" />}
        />
      </Routes>
    </>
  );
};

export default App;
