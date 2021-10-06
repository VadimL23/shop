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
  price?: any;
  weight?: string;
  productsList?: any;
  nameList?: any;
  id_category?: any;
};

const CategoryCard_2 = observer((props: IProps) => {
  const history = useHistory();
  const { id, name, img, price, id_category} = props;
  //const { backPath, change } = useLocationStore();
  console.log("Тут айди категории" + id_category);
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
        history.push('/category/' + `${id_category}` + "/" + `${id}`);
      }}
    >
      <div className={cn(s.card__img)}>
        <img src={img[0]} alt={name} className={cn(s.img_style)} />
        <span className={cn(s.new_text)}>Новинка</span>
      </div>
      <div className={cn(s.card__description)}>
        <span className={cn(s.title)}>{descriptionCutOff(name)}</span>
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
        <span className={cn(s.price)}>{price} р</span>
        <button className={cn(s.cart_button)}>В корзину</button>
      </div>
    
    </div>
  );
});

export { CategoryCard_2 };
