import React,{MouseEvent, useState, useEffect} from "react";
import s from "./style.module.scss";
import cn from "classnames";

interface IProps {
    isAuthenticated:boolean;
}

const Navbar = (props:IProps) =>{

    
    
 return ( 
  <nav>
    <div className={cn(s.nav, s.contain)}>
      <a href="/" className="">Logo shop</a>
      <ul className={cn(s.nav__links)}>
        <li><a href = "#">Home</a></li>
        <li><a href = "#">About</a></li>
      </ul>
    </div>
  </nav>
 )   
}

export {Navbar}