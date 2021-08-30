import React, { useState } from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Filtered} from "components/Filtered";
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
        <li className={cn(s.nav__item)}>
          <Link to={"/"} className={cn(s.chapter)}>
            <Filtered/>
          </Link>
        </li>
      </ul>
    </div>
 )   
}

export {Navmenu}