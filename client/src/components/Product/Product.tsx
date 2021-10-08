import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import star_icon from 'assets/svg/star_icon.svg';

interface IProps {
  //isAuthenticated:boolean;
  id?: number;
  title?: string;
  description?: string;
  rate?: number;
  price?: number;
  img?: any;
  addProductToCart?: any
}

// interface IUrl {
//   item:string,
// }

const Product = (props: IProps) => {
  console.log(props);
  return (
    <>
      <div className={cn(s.product)}>
        <div className={cn(s.product__content)}>
          <div className={cn(s.product__images)}>
            {props.img.map((item: any, index: any) => (
              <div className={cn(s.image_block)} key={index}>
                <img className={cn(s.image_size)} src={item} />
              </div>
            ))}
          </div>

        </div>
        <div className={cn(s.product__info)}>
          <p className={cn(s.product__title)}>{props.title}</p>
          <div className={cn(s.product__discription)}>{props.description}</div>
          <p className={cn(s.product__count)}>Кол-во</p>
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
          <p className={cn(s.product__count)}>Цена</p>
          <p className={cn(s.price)}>{props.price} р</p>
          <div className={cn(s.buttons_group)}>
            <button onClick={props.addProductToCart}>В корзину</button>
            <button>Продолжить покупки</button>
          </div>
          {/* <p className={cn(s.product__count)}>Пищевая ценность</p>
          <div className={cn(s.product_values)}>
            В будущем разместить дополнительная информация про продукты
          </div> */}
        
        </div>
      </div>
    </>
  );
};

export { Product };
