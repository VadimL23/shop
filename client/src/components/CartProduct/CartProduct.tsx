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
  console.log(props);
  const productsStore = useProductStore();
  const [quantitySelect, setQuantitySelect] = useState(quantity);
  const handlerSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    setQuantitySelect(+event.target.value);
    productsStore.cart.setQuantity(id, quantitySelect);
  };

  return (
  
      <div className={cn(s.product)}>
        <div className={cn(s['img__box'])}>
          <img className={cn(s['img'])} src={img[0]} alt={name.substring(0, 7)} />
        </div>
        <div className={cn(s['product_content'])}>
          <span className={cn(s['product__content__span'])}>{name ? name.substring(0, 12) : "Нет товара"}</span>
          <div className={cn(s['information'])}>
            <div className={cn(s['quantity'])}>
              <span className={cn(s['text'])}>Количество</span>
              <div className={cn(s.size)}>
                <a className={cn(s.minus)}>
                  <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="13" y2="1" stroke="black"/>
                  </svg> 
                </a>
                <span className={cn(s.text)}>100 г</span>
                <a className={cn(s.plus)}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="6.5" x2="13" y2="6.5" stroke="black"/>
                    <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="13" stroke="black"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className={cn(s['price'])}>
              <span className={cn(s['text'])}>Цена</span>
              <span className={cn(s['green'])}>{price} р</span>
            </div>
            <div className={cn(s['close_block'])}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.435 20.1422L10.2426 10.9498L10.9497 10.2427L20.1421 19.4351L19.435 20.1422Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2426 19.435L19.435 10.2426L20.1421 10.9497L10.9497 20.1421L10.2426 19.435Z" fill="black"/>
                <circle cx="15" cy="15" r="14.5" stroke="black"/>
              </svg>
            </div>
          </div>
        </div>
        {/* <div className={cn(s['product_quantity'])}>
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
        </div> */}
      </div>
  
  );
};

export { CartProduct };
