import React, { useState } from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Link} from "react-router-dom";


const Navmenu = () =>{

 return ( 
    <div className={cn(s.navmenu)}>
      <ul className={cn(s.nav__links)}>
        <li className={cn(s.nav__item)}>
          <Link to={"/"} className={cn(s.chapter)}>Каталог</Link>
        </li>
        <li className={cn(s.nav__item)}>
          <Link to={"/"} className={cn(s.chapter)}>Новинки</Link>
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
           id="navmenu__search"
           className={cn(s["navmenu__search"])}
           placeholder="Поиск"
           type="text"/>

    </div>
 )   
}

export {Navmenu}