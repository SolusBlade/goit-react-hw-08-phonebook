import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? { children } : <Navigate to={redirectTo} />}
    </Route>
  );
};

export default memo(PublicRoute);
