import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import nut from 'assets/Navbar/nut.svg';

const Avatar = () => {
  return (
    <NavLink to='/' className={cn(s.avatar_block)}>
      BON&thinsp;
      <img
        src={nut}
        alt='Bon Appetite'
        title='Bon Appetite'
        className={cn(s.avatar_img)}
      />
      &thinsp;Appetite
    </NavLink>
  );
};

export { Avatar };
