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
  //console.log(props.all.typesOfProduct);
  const historiay = useHistory();
  const location = useLocation();
  console.log(location.pathname.split('/'));
  const locationArray: any[] = location.pathname.split('/');
  locationArray.splice(0, 1);
  let namesArray: any[] = [...locationArray];
  //console.log(locationArray);
  //console.log(namesArray);
  namesArray[0] = "Каталог";
  if (namesArray.length == 2) {
    namesArray[0] = "Каталог";
    namesArray[1] = props.nameCategory;
  } else if (namesArray.length == 3) {
    namesArray[1] = props.nameCategory;
    namesArray[2] = props.productName;
  }
  //console.log(namesArray);

  //const array1 = [ "category", "Орехи", "Миндаль" ];
  //const array1_numbers = [ "category", "1", "2" ];
  //const path = array1_numbers.splice()
  function split(arr: string[], index: number) {
    let newArray = [...arr];
    return "/"+newArray.splice(0, (index+1)).join('/');

    // return arr.reduce((summ, el) => {
    //   if (temp < index) {
    //     temp++;
    //     return (summ = summ.concat(el, '/'));
    //   }
    //   return summ;
    // });
  }
  //console.log(split(array1_numbers, 0));
  //console.log(split(array1_numbers, 1));
  //console.log(split(array1_numbers, 2));


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

        {/* {locationArray.length >= 1 ? 
          locationArray.map((el, index, arr) => (
          <div className={cn(s.link_block)}>
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8.5 10L1 17.5" stroke="black"/>
          </svg>
        <Link to={`${split(arr, index)}`} key={index} className={cn(s.link)}>
          {el 
            ? <span className={cn(s.link_text)}>{props.nameCategory}</span>
            : <div></div> 
          }
        </Link>
        </div>
      )) : ""
        } */}
      
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
