import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import path from 'path';
import { useHistory } from 'react-router-dom';
import { useProductStore } from 'hooks';
import { getSnapshot } from 'mobx-state-tree';
import { ICart } from 'store/ProductStore/Cart';
import { Weight } from 'store/ProductStore/Cart/models/NameOfProduct';

interface IProps extends ICart {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ id, name, price, rate, img, quantity, weight }: IProps) => {
  const history = useHistory();
  const productsStore = useProductStore();
  const handleClickCart = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    productsStore.cart.add({ id, name, price, rate, img, quantity, weight });
  };

  const clickHandler = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    let route = '/info/' + `${id}` ?? '/';
    history.push(route);
  };

  return (
    <div className={cn(s.card)} onClick={clickHandler}>
      <div className={cn(s.card__item)}>
        <img
          className={cn(s['card__item--img'])}
          src={img && img[0]}
          alt={name}
        />
      </div>
      <div className={cn(s.card__item)}>
        <span className={cn(s.card__box_item, s['card__box_item--title'])}>
          {name}
        </span>
        <span className={cn(s.card__box_item, s['card__box_item--weight'])}>
          {' '}
          {quantity}&nbsp;г
        </span>
        <span className={cn(s.card__box_item, s['card__box_item--price'])}>
          {price}&nbsp;р
        </span>
        <span className={cn(s.card__box_item, s['card__box_item--info'])}>
          Новинка
        </span>
      </div>
      <button className={cn(s.btn, s.btn__order)} onClick={handleClickCart}>
        В корзину
      </button>
    </div>
  );
};

export { Card };
