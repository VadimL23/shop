import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import nut from 'assets/Navbar/nut.svg';

const Avatar = () => {
  return (
    <NavLink to='/' className={cn(s.avatar_block)}>
      BON &nbsp; Appetite
      <div className={s.avatar_box}>
    <img
        src={nut}
        alt='Bon Appetite'
        title='Bon Appetite'
        className={cn(s.avatar_img)}
      />   
          
      </div>
   
     
    </NavLink>
  );
};

export { Avatar };
