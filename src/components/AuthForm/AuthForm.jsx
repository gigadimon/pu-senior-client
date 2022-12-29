import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { authService } from '../../asyncService/authService';
import s from './AuthForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function AuthForm({ role }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    console.log(document.cookie);
    e.preventDefault();
    const body = { email, password };
    try {
      setLoading(true);
      const user = await authService(role, body);
      dispatch(logIn(user));
      navigate('/panel');
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  }
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField
          id="email"
          type="email"
          name="email"
          required
          label="E-mail"
          size="small"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          id="pass"
          type="password"
          name="password"
          label="Пароль"
          required
          size="small"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          sx={{ marginBottom: '20px' }}
        />
        <Button variant="contained" type="submit">
          {loading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="16"
              wrapperClass={s.spinner}
              visible={true}
            />
          ) : (
            ''
          )}{' '}
          {role === 'registration' ? (
            <span className={s.btnText}>Регистрация</span>
          ) : (
            <span className={s.btnText}>Войти</span>
          )}
        </Button>
      </form>
      <ToastContainer />
    </>
  );
}
