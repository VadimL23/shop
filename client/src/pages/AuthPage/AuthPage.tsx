import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'config';
import { useScrollBodyTop } from 'hooks';

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
};

const AuthPage = (props: IProps) => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  useScrollBodyTop();
  return (
    <div className={cn(s['auth__form_box'])}>
      <h2 className={cn(s.form__title)}>
        {isLogin ? 'Авторизация' : 'Регистрация'}
      </h2>
      <form method='post' className={cn(s.auth__form)}>
        <input
          type='email'
          placeholder='Введите ваш Email'
          id='email'
          name='email'
          className={cn(s.auth__input)}
        />

        <input
          type='password'
          placeholder='Введите ваш пароль'
          id='password'
          name='password'
          className={cn(s.auth__input)}
        />

        {isLogin ? (
          <div className={cn(s.auth__box)}>
            Нет аккаунта?{' '}
            <NavLink to={REGISTRATION_ROUTE} activeClassName={cn(s.auth__link)}>
              Зарегистрируйтесь!
            </NavLink>
          </div>
        ) : (
          <div className={cn(s.auth__box)}>
            Есть аккаунт?{' '}
            <NavLink to={LOGIN_ROUTE} activeClassName={cn(s.auth__link)}>
              Войдите!
            </NavLink>
          </div>
        )}

        <button
          type='submit'
          className={cn(s.auth__btn, s['auth__btn--primary'])}
        >
          {isLogin ? 'Войти' : 'Регистрация'}
        </button>
      </form>
    </div>
  );
};

export { AuthPage };
