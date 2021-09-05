import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import star_icon from "assets/svg/star_icon.svg";

interface IProps {
  //isAuthenticated:boolean;
  id:number,
  title:string, 
  description:string, 
  quantity:number, 
  // comments:string, 
  img: any,
}

// interface IUrl {
//   item:string, 
// }

const CartProduct = (props:IProps) =>{

return ( 
<>
  <div className={cn(s.product)}>
        <div className={cn(s.product__content)}>
            <div className={cn(s.product__images)}>
                  <div className={cn(s.image_block)}>
                      <img className={cn(s.image_size)} src={props.img} />
                  </div>
            </div>
        </div>
        <div className={cn(s.product__info)}>
          <p className={cn(s.product__partNumber)}>Арт. {props.id}</p>
          <p className={cn(s.product__title)}>{props.title}</p>
          <p className={cn(s.product__size)}>100 гр</p>
          <p className={cn(s.price)}>150 рублей</p>
          <p className={cn(s.product__quantity)}>{props.quantity}</p>
          <div className={cn(s.buttons__row)}>
            <button>Увеличить</button>
            <button>Уменьшить</button>
          </div>
                    
        </div>
    </div>
</>
)   
}

export {CartProduct}