import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import TextField from '@material-ui/core/TextField';

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
};

const Footer = (props: IProps) => {
  return (
    <div className={cn(s.footer)}>
      <div className={cn(s['footer__item'])}>
        <div className={cn(s['footer__content'])}>
          <div className={cn(s.footer__element)}>
            <span className={cn(s['footer__title'])}>Меню</span>
            <Link to={'/'} className={s['footer_nav']}>
              Главная
            </Link>
            <Link to={'/'} className={s['footer_nav']}>
              Совместная покупка
            </Link>
            <Link to={'/'} className={s['footer_nav']}>
              Каталог
            </Link>
            <Link to={'/'} className={s['footer_nav']}>
              Возврат и обмен
            </Link>
            <Link to={'/'} className={s['footer_nav']}>
              Связь с администрацией
            </Link>
          </div>
          <div className={cn(s.footer__element)}>
            <span className={cn(s['footer__title'])}>Личный кабинет</span>
            <Link to={'/'} className={s['footer_nav']}>
              Вход
            </Link>
            <Link to={'/'} className={s['footer_nav']}>
              Регистрация
            </Link>
            <Link to={'/'} className={s['footer_nav']}>
              Список сравнений
            </Link>
          </div>
          <div className={cn(s.footer__element)}>
            <span className={cn(s['footer__title'])}>Контакты</span>

            <a href='tel:88001002424' className={cn(s['footer_nav'])}>
              <PhoneIcon /> &nbsp; 8(800)100-24-24
            </a>
            <a href='mail:zero232323@inbox.ru' className={s['footer_nav']}>
              <MailOutlineIcon /> &nbsp; zero232323@inbox.ru
            </a>
            <Link to={'/'} className={cn(s['footer_nav'])}>
              <AccessTimeIcon /> &nbsp; с 10:00 до 18:00
            </Link>
            <Link to={'/'} className={cn(s['footer_nav'])}>
              <GolfCourseIcon /> &nbsp; Россия, Санкт-Питербург, до
              востребования
            </Link>
          </div>
          <div className={cn(s.footer__element)}>
            <span className={cn(s['footer__title'])}>Обратный звонок</span>
            <form action='/' className={cn(s['footer__form'])}>
              <TextField
                id='footer_name'
                label='Ваше имя'
                variant='outlined'
                className={cn(s['footer__input'])}
              />
              <TextField
                id='footer_phone'
                label='Ваш тлефон'
                variant='outlined'
                className={cn(s['footer__input'])}
              />

              <button className={cn(s['footer_btn'])}>Заказать звонок</button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={cn({
          [s.footer__item]: true,
          [s['footer__item--last']]: true,
        })}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione non
        eius, reiciendis
      </div>
    </div>
  );
};

export { Footer };
