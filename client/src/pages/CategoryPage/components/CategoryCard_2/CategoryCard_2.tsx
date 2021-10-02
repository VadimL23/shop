import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { name } from '../CategoryPanel';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
  id: number;
  name: string;
  img: string[];
  price: any;
  weight?: string;
  productsList?: any;
  nameList?: any;
};

const CategoryCard_2 = observer((props: IProps) => {
  const history = useHistory();
  const { id, name, img, price } = props;
  //const { backPath, change } = useLocationStore();
  console.log("Тут айди товара" + id);


  const descriptionCutOff = (text: string): string => {
    if (text.length > 17) {
      return text.slice(0, 17);
    }
    return text;
  };

  return (
    <div
      className={cn(s.card)}
      onClick={(el) => {
        el.stopPropagation();
        history.push('/info/' + `${id}`);
      }}
    >
      <div className={cn(s.card__img)}>
        <img src={img[0]} alt={name} className={cn(s.img_style)} />
        <span className={cn(s.new_text)}>Новинка</span>
      </div>
      <div className={cn(s.card__description)}>
        <span className={cn(s.title)}>{descriptionCutOff(name)}</span>
        <div className={cn(s.size)}>
            <div className={cn(s.minus)}>
              <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="13" y2="1" stroke="black"/>
              </svg>
              <svg width="1" height="14" viewBox="0 0 1 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="0.5" x2="0.499999" y2="13.5" stroke="black"/>
              </svg>
            </div>
            <span className={cn(s.text)}>100 г</span>
            <div className={cn(s.plus)}>
              <svg width="1" height="14" viewBox="0 0 1 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="0.5" x2="0.499999" y2="13.5" stroke="black"/>
              </svg>
              <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="13" y2="1" stroke="black"/>
              </svg>
            </div>
        </div>
        <span className={cn(s.price)}>{price} р</span>
        <button className={cn(s.cart_button)}>В корзину</button>
      </div>
    
    </div>
  );
});

export { CategoryCard_2 };
