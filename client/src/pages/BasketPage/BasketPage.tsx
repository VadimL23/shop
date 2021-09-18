import React, { useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { CartProduct } from 'components/CartProduct';
import { useProductStore } from 'hooks';
import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import { Link } from 'react-router-dom';

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
};

const BasketPage = observer((props: any) => {
  const productStore = useProductStore();
  const { productList: list } = getSnapshot(productStore.cart);

  return (
    <>
      {list.length == 0 ? (
        <div className={cn(s['basket__empty__wrapper'])}>
          <h2 className={cn(s['basket__title--empty'])}>
            Корзина пока пуста. Вы можете выбрать товар из&nbsp;
            <Link className={s.basket__link} to={'/'}>
              каталога
            </Link>
          </h2>
        </div>
      ) : (
        <div className={cn(s.basket)}>
          <p className={cn(s.basket_title)}>Корзина заказа</p>
          {list.map((el) => (
            <div key={el.id}>
              <CartProduct {...el} />
            </div>
          ))}
          <p className={cn(s.basket_summ)}>
            <b>Общее количество единиц товара:</b>&nbsp;
            {productStore.cart.getQuantityAll()}
          </p>
          <p className={cn(s.basket_summ)}>
            <b>Общая сумма: </b>
            {productStore.cart.getSumm()} <b>руб.</b>
          </p>
        </div>
      )}
      <div className={cn(s.buy_form)}>
        <p className={cn(s.form_title)}>Информация для заказа</p>

        <form
          onSubmit={(e: any) => {
            console.log(e);
          }}
        >
          <div className={cn(s.item)}>
            <label htmlFor='name'>Имя</label>
            <input type='text' id='name' />
          </div>
          <div className={cn(s.item)}>
            <label htmlFor='phone'>Телефон</label>
            <input type='number' id='phone' />
          </div>
          <div className={cn(s.item)}>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' />
          </div>
          <div className={cn(s.item)}>
            <label htmlFor='adress'>Адрес</label>
            <input type='text' id='adress' />
          </div>
          {/* <div className={cn(s.item)}>
                  <label htmlFor='data'>Ориентировочное время доставки</label>
                  <input type='data' id='data' />
                </div>    */}
          <div className={cn(s.item)}>
            <label htmlFor='comment'>Комментарий</label>
            <textarea placeholder='<для уточнения деталей>'></textarea>
          </div>
          <input className={cn(s.item_input)} type='submit' value='Отправить' />
        </form>
      </div>
    </>
  );
});

export { BasketPage };
