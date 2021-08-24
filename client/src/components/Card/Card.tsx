import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
}


const Card = (props:IProps) => {
       return (
       <div className={cn(s.card)}>
        <div className={cn(s.card__item)}>
         <img className={cn(s['card__item--img'])} src="./images/cards/1.jpg" alt="картинка"/>
         </div> 
         <div className={cn(s.card__item)}>       
       <span className={cn(s.card__box_item,s['card__box_item--title'])}>Коробочка с чем то вкусным</span>
       <span className={cn(s.card__box_item,s['card__box_item--weight'])}> 200 г</span>
       <span className={cn(s.card__box_item,s['card__box_item--price'])}>180 р</span>
       <span className={cn(s.card__box_item,s['card__box_item--info'])}>Новинка</span>
       </div>
       </div>
       )
       
      }
       
export {
      Card,
      }