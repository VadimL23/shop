import React,{useState} from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {CartProduct} from "components/CartProduct";
import {useProductStore} from "hooks";
import {observer} from "mobx-react-lite";
import {getSnapshot} from "mobx-state-tree";
import {Link} from "react-router-dom";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
}

const BasketPage = observer((props:any) => {
    const productStore = useProductStore();
    const {productList:list} = getSnapshot(productStore.cart);
    console.log("list ", list);
    
    return (
       <>
       {(list.length == 0)? 
       (
        <div className={cn(s["basket__empty__wrapper"])}>
        <h2 className={cn(s["basket__title--empty"])}>
            Корзина пока пуста. Вы можете выбрать товар из&nbsp; 
            <Link 
            className={s.basket__link}
            to={"/"}>каталога</Link>
        </h2>
        </div>
        )
       :
       (<div className={cn(s.basket)}>
              <p className={cn(s.basket_title)}>Корзина заказа</p>
              {list.map((el) => (
                  <div key={el.id}>
                      <CartProduct 
                        {...el}
                      />
                  </div>
                ))
              }
              <p className={cn(s.basket_all_quantity)}>Общее количество: 3</p>
              <p className={cn(s.basket_all_quantity)}>Общая сумма: 450 рублей</p>
            </div>)}  
       </>
       )
       
      });
       
export { BasketPage }