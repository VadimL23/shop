import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { useLocation, Link } from 'react-router-dom';
import { useHistory } from "react-router"

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
  all?: any;
  nameCategory?: string;
};

const Location = (props: IProps) => {
  //console.log(props.all.typesOfProduct);
  const historiay = useHistory();
  const location = useLocation();
  const [active, setActiveItem] = useState({active: false, categoryName: "", productName: ""});
  const locationArray = location.pathname.split('/');
  console.log(locationArray);
  locationArray.splice(0, 1);
  console.log(locationArray);

  if (locationArray[0] === "category") {
    console.log(locationArray[0]);
    //locationArray[0] = props.nameCategory;
  } else if (locationArray[0] === "info") {
    console.log(locationArray[0]);
    //locationArray[1] = props.nameCategory;
  }
  function split(arr: string[], index: number) {
    let temp = 0;
    return arr.reduce((summ, el) => {
      if (temp < index) {
        temp++;
        return (summ = summ.concat(el, '/'));
      }
      return summ;
    });
  }

  useEffect(() => {
    //console.log(props);
    //setActiveItem({active: false, categoryName: "", productName: ""});
    //console.log(`Сработало изменение пути страницы ${locationArray}`);
  })
  return (
    <div className={cn(s.location)}>
      <div className={cn(s.path)}>
        <Link to={`/category`} className={cn(s.link)}>
        {'Каталог'}
        </Link>
        {locationArray.length >= 1 ? 
          locationArray.map((el, index, arr) => (
          <div className={cn(s.link_block)}>
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8.5 10L1 17.5" stroke="black"/>
          </svg>
        <Link to={`${split(arr, index)}`} key={index} className={cn(s.link)}>
          {el 
            ? <span className={cn(s.link_text)}>{props.nameCategory}</span>
            : <div></div> }
        </Link>
        </div>
      )) : ""
        }
      
      </div>
      
      <a className={cn(s.backLink)} onClick={() => historiay.goBack()}>
        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1L2 7.5M2 7.5L14 13.5M2 7.5H25.5" stroke="black"/>
        </svg>
        <span className={cn(s.text)} > Назад </span>  
      </a>
    </div>
  );
};

export { Location };
