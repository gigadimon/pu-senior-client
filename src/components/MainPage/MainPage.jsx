import { Outlet } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import s from './MainPage.module.css';

export default function MainPage() {
  const token = getCookie('token');
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate('/');
  }, [token, navigate]);

  return <>{token && <Outlet />}</>;
}
