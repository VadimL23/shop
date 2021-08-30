import React from "react";
import s from "./style.module.scss";
import cn from "classnames";
import search_url from "./img/search_icon.svg";


const Filtered = () =>{
 
 return ( 
    <div className={cn(s.search_block)}>
      <div className={cn(s.element)}>
        <img src={search_url} alt=""/>
      </div>    
      <input type="text" placeholder="Поиск" className={cn(s.element_input)}/>
    </div>   
 )   
}

export {Filtered}