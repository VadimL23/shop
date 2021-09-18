import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { NavLink } from 'react-router-dom';

export type name = {
  id: number;
  name: string;
};

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
  nameList: name[];
};

const CategoryPanel = (props: IProps) => {
  const { nameList } = props;
  return (
    <ul className={cn(s['panel__group'])}>
      {nameList.map((el) => (
        <li
          className={cn(
            s.panel__li,
            s.panel__li_group,
            s['panel__li_group--active']
          )}
          key={el.id}
        >
          <NavLink
            to={'/category/' + `${el.id}`}
            activeClassName={cn(s.navlink__active)}
            className={cn(s.link)}
          >
            <img
              className={cn(s['link__img'])}
              src='http://lorempixel.com/50/50/nature'
              alt={el.name}
            />
            <span className={cn(s['link__span'])}>{el.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export { CategoryPanel };
