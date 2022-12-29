import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import s from './AuthPage.module.css';

export default function AuthPage() {
  const token = getCookie('token');
  //   console.log(token);

  return (
    <>
      {!token ? (
        <>
          <nav className={s.nav}>
            <NavLink to="registration" className={s.link}>
              Регистрация
            </NavLink>
            <NavLink to="login" className={s.link}>
              Войти
            </NavLink>
          </nav>
          <Outlet />
        </>
      ) : (
        <Navigate to="panel" />
      )}
    </>
  );
}
