import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies </NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />{' '}
      </Suspense>
    </div>
  );
};
