import React, { useState, Dispatch,  useEffect } from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Link} from "react-router-dom";
import {Burger} from "../Navbar/components/Burger";

interface IProps{
    setVisibleModal:Dispatch<any>;
    isVisibleModal:boolean;
}

const Navmenu = (props:IProps) =>{
    const {setVisibleModal,isVisibleModal} = props;
    
 return ( 
    <div  className={cn(s.navmenu)}>
        
      <Burger/>
      
      <ul className={cn(s.nav__links)}>
        <li className={cn(s.nav__item)}>
          <Link to={"/category"} className={cn(s.chapter)}>Каталог</Link>
        </li>
        <li className={cn(s.nav__item)}>
          <Link to={"/"} className={cn(s.chapter)}>Доставка</Link>
        </li>
        <li className={cn(s.nav__item)}>
          <Link to={"/"} className={cn(s.chapter)}>О нас</Link>
        </li >
        <li className={cn(s.nav__item)}>
          <Link to={"/"} className={cn(s.chapter)}>Акции</Link>
        </li>
      
       </ul>
       <label 
            onClick={(e)=>{e.stopPropagation();
                           alert("SEARCH")}}
            className={cn(s['label_search'])}
            htmlFor="navmenu__search">     
        </label>
         <input
           onClick ={()=>{setVisibleModal(true);}}
           
           id="navmenu__search"
           className={cn(s["navmenu__search"])}
           placeholder="Поиск"
           type="text"/>

    </div>
 )   
}

export {Navmenu}