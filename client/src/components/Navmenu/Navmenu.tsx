import React, { useState } from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Filtered} from "components/Filtered";

const Navmenu = () =>{

  //const [tableData, setTableData] = useState([]);
  //setTableData(["Каталог", "Новинки", "О нас", "Акции"]);
 return ( 
    <div className={cn(s.navmenu)}>
      <ul className={cn(s.nav__links)}>
        <li>
          <a className={cn(s.chapter)}>Каталог</a>
        </li>
        <li>
          <a className={cn(s.chapter)}>Новинки</a>
        </li>
        <li>
          <a className={cn(s.chapter)}>О &emsp; нас</a>
        </li>
        <li>
          <a className={cn(s.chapter)}>Акции</a>
        </li>
        <li>
          <a className={cn(s.chapter)}>
            <Filtered/>
          </a>
        </li>
        {/* <li>
          <a className={cn(s.chapter)}>Рецепты</a>
        </li> */}
      </ul>
    </div>
 )   
}

export {Navmenu}