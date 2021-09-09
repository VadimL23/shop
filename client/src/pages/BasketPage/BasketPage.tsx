import React,{useState} from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {Preloader} from "components/Preloader";
import {CartProduct} from "components/CartProduct";

import cart_data from "config/constants/cart_data";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
}

const BasketPage = (props:any) => {

    console.log(cart_data); 
    return (
       <>
            {/* <Preloader isVisible={true}/> */}
            <div className={cn(s.basket)}>
              <p className={cn(s.basket_title)}>Оформление ореховой корзины</p>
              {cart_data.map((item:any, index: any) => (
                  <div key={index}>
                      <CartProduct 
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        quantity={item.quantity}
                        price={item.price}
                        img={item.img}
                      />
                  </div>
                ))
              }
              <p className={cn(s.basket_all_quantity)}>Общее количество: 3</p>
              <p className={cn(s.basket_all_quantity)}>Общая сумма: 450 рублей</p>
            </div>  
       </>
       )
       
      }
       
export { BasketPage }