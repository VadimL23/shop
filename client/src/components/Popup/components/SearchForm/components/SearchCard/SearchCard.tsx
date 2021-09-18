import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

type Product = {
  id: number;
  name: string;
  price: number;
  rate: number;
  img: string[];
};

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
  product: Product;
};

const SearchCard = (props: IProps) => {
  const { product } = props;
  const { id, name, price, rate, img } = product;

  return (
    <div className={cn(s.search__card)}>
      <div className={cn(s.search__item)}>
        <img className={cn(s.search__img)} src={img[0]} alt={name} />
        <div className={cn(s.search__content)}>
          <div className={cn(s.search__title)}>{name}</div>
          <div className={cn(s.search__subtitle)}>
            <span>
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 358.521 358.521'
                className={cn(s['search__star'])}
                fill='#3afa'
              >
                <g>
                  <path
                    d='M290.049,349.752l-110.792-80.49l-110.792,80.49l42.314-130.253L0,139.003h136.937L179.257,8.769l42.314,130.233h136.949
                                        l-110.786,80.496L290.049,349.752z M39.551,151.856l86.345,62.739L92.919,316.101l86.345-62.732l86.338,62.732l-32.976-101.505
                                        l86.351-62.739H212.24L179.257,50.364l-32.983,101.493H39.551z'
                  />
                </g>
              </svg>
            </span>
            <span className={cn(s['search__span'])}>{rate}</span>
          </div>
        </div>
      </div>
      <div className={cn(s.search__item)}>
        <span className={cn(s['search__span'], s['search__span--second'])}>
          666 р/кг
        </span>
      </div>
      <div className={cn(s.search__item)}>
        <button
          className={cn(s.btn, s.btn__order)}
          type='button'
          onClick={() => {
            alert('Click');
          }}
        >
          <svg
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(s.search__star)}
          >
            <title />
            <g data-name='Layer 2' id='Layer_2'>
              <path d='M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z' />
              <path d='M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z' />
            </g>
            <g id='frame'>
              <rect fill='none' height='62' width='62' />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export { SearchCard };
