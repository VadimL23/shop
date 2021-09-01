import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import path from "path";
import {useHistory} from "react-router-dom";

export type cardData ={
    id:number,
    img:{
        src:string,
        alt:string
    }
}

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  cardData?:cardData
}


const Card = (props:IProps) => {
    const {cardData} = props;
    const history = useHistory();
    const clickHandler =(e: React.MouseEvent<HTMLElement>):void =>{
       e.stopPropagation();
       let route = "/info/"+`${cardData?.id}` ?? "/";
       history.push(route);
    }
    
    
       return (
       <div 
       className={cn(s.card)}
       onClick={clickHandler}
       >
        <div className={cn(s.card__item)}>
         <img className={cn(s['card__item--img'])} src={path.resolve(__dirname,`./images/cards/${cardData?.img?.src}`)} alt={cardData?.img?.alt} />
         </div> 
         <div className={cn(s.card__item)}>       
       <span className={cn(s.card__box_item,s['card__box_item--title'])}>Коробочка с чем то вкусным</span>
       <span className={cn(s.card__box_item,s['card__box_item--weight'])}> 200 г</span>
       <span className={cn(s.card__box_item,s['card__box_item--price'])}>180 р</span>
       <span className={cn(s.card__box_item,s['card__box_item--info'])}>Новинка</span>
       </div>
          <button className={cn(s.btn,s.btn__order)}>В корзину</button>
       </div>
       )
       
      }
       
export {
      Card,
     
      }