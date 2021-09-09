import React, {useState} from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Link} from "react-router-dom";

const Burger = () =>{
 const [menuActive, setMenuActive] = useState(false);
 return (
   <div className={cn(s.burger)}>
      <a onClick={() => setMenuActive(!menuActive)} className={cn(s.lines)}></a>
      <ul className={menuActive ? cn(s.burger_links) : cn(s.non_links)}>
        <li className={cn(s.nav__item)}>
          <Link to={"/"} className={cn(s.chapter)}>Каталог</Link>
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
   </div>
 )   
}

export {Burger}