import React, { ChangeEvent, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import star_icon from 'assets/svg/star_icon.svg';
import { getSnapshot } from 'mobx-state-tree';
import { ICart } from 'store/ProductStore/Cart';
import { useProductStore } from 'hooks';

interface IProps extends ICart {
  description: string;
}

const options = () => {
  const arr = [];
  for (let i = 1; i < 100; i++) {
    arr.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return arr;
};

const CartProduct = (props: IProps) => {
  const { id, name, description, quantity, price, rate, img, weight } = props;
  const productsStore = useProductStore();
  const [quantitySelect, setQuantitySelect] = useState(quantity);
  const handlerSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    setQuantitySelect(+event.target.value);
    productsStore.cart.setQuantity(id, quantitySelect);
  };

  return (
    <>
      <div className={cn(s.product)}>
        <div className={cn(s['img__box'])}>
          <img className={cn(s['img'])} src={img[0]} alt={name} />
        </div>
        <div className={cn(s['product_content'])}>
          <span className={cn(s['product__content__span'])}>{name}</span>
        </div>
        <div className={cn(s['product_quantity'])}>
          <span className={cn(s['subtitle'])}>Фасовка</span>
          <span
            className={cn(
              s['product__content__span'],
              s['product__content__span--quantity']
            )}
          >
            {weight}
          </span>
        </div>
        <div className={cn(s['product_select'])}>
          <span className={cn(s['subtitle'])}>Кол-во</span>
          <select
            onChange={handlerSelect}
            defaultValue={quantitySelect}
            className={cn(s.cart__select)}
          >
            {options()}
          </select>
        </div>
        <div className={cn(s['product_summ'])}>
          <span className={cn(s['subtitle'])}>Итого:</span>
          <span
            className={cn(
              s['product__content__span'],
              s['product__content__span--quantity']
            )}
          >
            {productsStore.cart.getSummById(id)}&nbsp;р
          </span>
        </div>
        <div className={cn(s['product_summ'])}>
          <button
            onClick={(e) => {
              e.preventDefault();
              productsStore.cart.delete(id);
            }}
            className={cn(
              s['product__content__span'],
              s['product__content__span--quantity'],
              s['product__btn']
            )}
          >
            &nbsp;&times;
          </button>
        </div>
      </div>
    </>
  );
};

export { CartProduct };
