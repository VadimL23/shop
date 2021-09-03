import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import star_icon from "assets/svg/star_icon.svg";

interface IProps {
  //isAuthenticated:boolean;
  id:number, 
  title:string, 
  description:string, 
  rate:number, 
  // comments:string, 
  img: any,
}

// interface IUrl {
//   item:string, 
// }

const Product = (props:IProps) =>{

return ( 
<>
  <div className={cn(s.product)}>
        <div className={cn(s.product__content)}>
            <div className={cn(s.product__images)}>

                {props.img.map((item:any, index: any) => (
                  <div className={cn(s.image_block)} key={index}>
                      <img className={cn(s.image_size)} src={item} />
                  </div>
                ))}
          
            </div>

            <div className={cn(s.product__info_mobile)}>
              <p className={cn(s.product__partNumber)}>Арт. {props.id}</p>
              <p className={cn(s.product__title)}>{props.title}</p>
              <div className={cn(s.rating)}>
                <div className={cn(s.stars)}>
                  <img src={star_icon} className={cn(s.icon_img)}/>
                </div>
                <div className={cn(s.stars)}>
                  <img src={star_icon} className={cn(s.icon_img)}/>
                </div>
                <div className={cn(s.stars)}>
                  <img src={star_icon} className={cn(s.icon_img)}/>
                </div>
                <div className={cn(s.stars)}>
                  <img src={star_icon} className={cn(s.icon_img)}/>
                </div>
                <div className={cn(s.stars)}>
                  <img src={star_icon} className={cn(s.icon_img)}/>
                </div>
                <div className={cn(s.rate)}>{props.rate}</div>
              </div>
              <p className={cn(s.product__size)}>100 гр</p>
              <p className={cn(s.price)}>150 рублей</p>
              <button>Добавить в корзину</button>
            </div>

            <div className={cn(s.product__discription)}>
                {props.description}
            </div>
        </div>
        <div className={cn(s.product__info)}>
          <p className={cn(s.product__partNumber)}>Арт. {props.id}</p>
          <p className={cn(s.product__title)}>{props.title}</p>
          <div className={cn(s.rating)}>
              <div className={cn(s.stars)}>
                <img src={star_icon} className={cn(s.icon_img)}/>
              </div>
              <div className={cn(s.stars)}>
                <img src={star_icon} className={cn(s.icon_img)}/>
              </div>
              <div className={cn(s.stars)}>
                <img src={star_icon} className={cn(s.icon_img)}/>
              </div>
              <div className={cn(s.stars)}>
                <img src={star_icon} className={cn(s.icon_img)}/>
              </div>
              <div className={cn(s.stars)}>
                <img src={star_icon} className={cn(s.icon_img)}/>
              </div>
              <div className={cn(s.rate)}>{props.rate}</div>
          </div>
          <p className={cn(s.product__size)}>100 гр</p>
          <p className={cn(s.price)}>150 рублей</p>
            <button>Добавить в корзину</button>
        </div>
    </div>
</>
)   
}

export {Product}