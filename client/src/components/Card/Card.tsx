import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import path from "path";
import {useHistory} from "react-router-dom";
import {useProductStore} from "hooks";
import {getSnapshot} from "mobx-state-tree";

export type cardData ={
  id:number,
  name:string,
  price:number,
  rate:number,
  img:string[],
  quantity:number
}

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  id:number,
  name:string,
  price:number,
  rate:number,
  img:string[],
  quantity:number,
}

const Card = (props:IProps) => {
    const {id,
            name,
            price,
            rate,
            img,
            quantity} = props;
    const history = useHistory();
    const productsStore = useProductStore();
    const handleClickCart = (event: React.MouseEvent<HTMLElement>):void=>{
         event.stopPropagation();
         productsStore.cart.add(
            id,
            name,
            price,
            rate,
            img,
            quantity);
          }
    
    const clickHandler =(e: React.MouseEvent<HTMLElement>):void =>{
       e.stopPropagation();
       let route = "/info/"+`${id}` ?? "/";
       history.push(route);
    }
    
    
       return (
       <div 
       className={cn(s.card)}
       onClick={clickHandler}
       >
        <div className={cn(s.card__item)}>
         <img className={cn(s['card__item--img'])} src={img[0]} alt={name} />
         </div> 
         <div className={cn(s.card__item)}>       
       <span className={cn(s.card__box_item,s['card__box_item--title'])}>{name}</span>
       <span className={cn(s.card__box_item,s['card__box_item--weight'])}> {quantity}&nbsp;г</span>
       <span className={cn(s.card__box_item,s['card__box_item--price'])}>{price}&nbsp;р</span>
       <span className={cn(s.card__box_item,s['card__box_item--info'])}>Новинка</span>
       </div>
          <button 
                className={cn(s.btn,s.btn__order)}
                onClick = {handleClickCart}
                >
                В корзину
                </button>
       </div>
       )
       
      }
       
export {
      Card,
     
      }