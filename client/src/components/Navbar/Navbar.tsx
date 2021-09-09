import React,{Dispatch, useState} from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Avatar} from "components/Navbar/Avatar";
import {NavLink} from "react-router-dom";
import * as route from "config/const";
import {Navmenu}  from "../Navmenu";
import {CartSmallProduct} from "components/Navbar/CartSmallProduct";

import cart_data from "config/constants/cart_data";

interface IProps {
    isAuthenticated:boolean;
    setVisibleModal:Dispatch<any>;
    isVisibleModal:boolean;
    //isCartWindowOpen:boolean;
}



const Navbar = (props:IProps) =>{
 
   let {isAuthenticated,setVisibleModal,isVisibleModal} = props;
   let [isCartWindowOpen, openSmallCartWindow] = useState(false);
     
    return ( 
     
    <div className={cn(s.menu__wrapper)}>
        
     <div className={cn(s.nav, s.contain)}> 
     <Avatar />  
       <nav>
        <ul className={cn(s.nav__links)}>
           
         <li className={cn(s.nav__item)}>
             {isAuthenticated ? 
         <NavLink 
           to={"/"}
          className={cn(s.Navbar__icon)}>
           
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(s.Navbar__img)}
                >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
        </NavLink>
          
             :
        <NavLink 
           className={cn(s.Navbar__icon)}
           to={route.LOGIN_ROUTE}
           >
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(s.Navbar__img)}
                  viewBox="0 0 24 24"
                  >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
         </NavLink>
         }
     
         </li>
           
         <li className={cn(s.nav__item)}>
          <NavLink 
            to="#"
            className={cn(s.Navbar__icon)}
            onClick={() => openSmallCartWindow(!isCartWindowOpen)}
            >
                <svg 
                    viewBox="0 0 32 32" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(s.Navbar__img)}
                >
                <title />
                <g data-name="Layer 2" id="Layer_2">
                    <path d="M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z" />
                    <path d="M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z" />
                </g>
                <g id="frame">
                    <rect fill="none" height="62" width="62" />
                </g>
                </svg>
            </NavLink>
            
         </li>
           
        </ul>
      </nav>
  
    
    
     </div>
        
        <Navmenu 
        isVisibleModal = {isVisibleModal}
        setVisibleModal={setVisibleModal}
        />
        { isCartWindowOpen && cart_data.length > 0 ?
        
        <div className={cn(s.cart_small)}>
            { cart_data.map((item:any, index: any) => (
                  <div key={index}>
                      <CartSmallProduct 
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        quantity={item.quantity}
                        price={item.price}
                        img={item.img}
                      />
                  </div>
                ))
            }
              <p className={cn(s.basket_all_quantity)}>Общее количество: 3</p>
              <p className={cn(s.basket_all_quantity)}>Общая сумма: 450 рублей</p> 
        </div> 
          : <div className={isCartWindowOpen ? cn(s.cart_small) : cn(s.non_open)}> Корзина пуста </div>
          }
        

  </div>     
        
     
 )   
}

export {Navbar}