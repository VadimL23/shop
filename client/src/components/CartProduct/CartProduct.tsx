import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import star_icon from "assets/svg/star_icon.svg";
import {useProductStore} from "hooks";
import {getSnapshot} from "mobx-state-tree";

interface IProps {
  id:number,
  name:string, 
  description:string, 
  quantity:number,
  price:number,
  rate:number,
  img: string[],
}

const options = ()=>{
   const arr = [];
    for(let i = 0; i<100; i++){
    arr.push(<option key={i} defaultValue={1} value={i}>{i+1}</option>);
    }
    return arr;
}

const CartProduct = (props:IProps) =>{
const { id,
        name, 
        description, 
        quantity,
        price,
        rate,
        img} =props;
const productsStore = useProductStore();

    
return ( 
<>
  <div className={cn(s.product)}>
        <div className={cn(s["img__box"])}>
            <img 
            className={cn(s["img"])}
            src={img[0]} alt={name}/>
        </div>
        <div className={cn(s["product_content"])}>
           <span className={cn(s["product__content__span"])}>{name}</span>
          
        </div>
        <div className={cn(s["product_quantity"])}>
        <span className={cn(s["subtitle"])}>Фасовка</span>
         <span className={cn(s["product__content__span"],
                              s["product__content__span--quantity"])}>{quantity}&nbsp;г</span>
        </div>   
        <div className={cn(s["product_select"])}>
             <span className={cn(s["subtitle"])}>Кол-во</span>
             <select className={cn(s.cart__selsect)}>
              {
               options()
              }
             </select>
        </div>
         <div className={cn(s["product_summ"])}>
             <span className={cn(s["subtitle"])}>Итого:</span>
              <span className={cn(s["product__content__span"],
                              s["product__content__span--quantity"])}>100 р</span>
        </div>
           <div className={cn(s["product_summ"])}>
             
              <button 
                 onClick={(e)=>{e.preventDefault();productsStore.cart.delete(id)}}            
                 className={cn(s["product__content__span"],
                              s["product__content__span--quantity"],
                                   s["product__btn"])}>&nbsp;&times;</button>
        </div>
  </div>
</>
)   
}

export {CartProduct}