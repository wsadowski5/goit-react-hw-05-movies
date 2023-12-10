import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <nav className={css.navigation}>
        <NavLink className={css.navLink}to="/"> Home</NavLink>
        <NavLink className={css.navLink} to="/movies"> Movies </NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />{' '}
      </Suspense>
    </div>
  );
};
