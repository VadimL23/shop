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
  productName?: string;
};

const Location = (props: IProps) => {
 
  const historiay = useHistory();
  const location = useLocation();
  console.log(location.pathname.split('/'));
  const locationArray: any[] = location.pathname.split('/');
  locationArray.splice(0, 1);
  let namesArray: any[] = [...locationArray];
  console.log(namesArray);
  console.log(locationArray);


  if (namesArray.length == 1) {
    if (namesArray[0] == "category") {
      namesArray[0] = "Каталог";
    } else if (namesArray[0] == "basket"){
      namesArray[0] = "Корзина";
    }
  } else if (namesArray.length == 2) {
    namesArray[0] = "Каталог";
    namesArray[1] = props.nameCategory;
  } else if (namesArray.length == 3) {
    namesArray[1] = props.nameCategory;
    namesArray[2] = props.productName;
  }
  
  function split(arr: string[], index: number) {
    let newArray = [...arr];
    return "/"+newArray.splice(0, (index+1)).join('/');

  }

  return (
    <div className={cn(s.location)}>
      <div className={cn(s.path)}>
        { 
          namesArray.map((el, index) => {

          if (namesArray.length == index+1) {
            return (
              <div className={cn(s.link_block)}>
                <Link to={`${split(locationArray, index)}`} key={index} className={cn(s.link)}>
                  { el 
                  ? <span className={cn(s.link_text, s.active)}>{namesArray[index]}</span>
                  : <div></div> 
                  }
                </Link>
              </div>
              )
          } else {
            return (
            <div className={cn(s.link_block)}>
              <Link to={`${split(locationArray, index)}`} key={index} className={cn(s.link)}>
                { el 
                ? <span className={cn(s.link_text)}>{namesArray[index]}</span>
                : <div></div> 
                }
              </Link>
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8.5 10L1 17.5" stroke="black"/>
              </svg>
            </div>
            )
          }
        }
          
          )
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
