import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({
  children,
  redirectTo,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
    return (
      <Route {...routeProps}>
      {isLoggedIn ? { children } : <Navigate to={redirectTo} />}
    </Route>
  );
};

export default memo(PrivateRoute);
