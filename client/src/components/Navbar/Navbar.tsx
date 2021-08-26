import React from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Avatar} from "components/Navbar/Avatar";
import {Icon} from "components/Navbar/Icon";

interface IProps {
    isAuthenticated:boolean;
}

const Navbar = (props:IProps) =>{

    
    
 return ( 
  <nav>
    <div className={cn(s.nav, s.contain)}>
      <Avatar/>
      {/* <Filtered/> */}
      <ul className={cn(s.nav__links)}>
        <li><Icon url="private_page.svg"/></li>
        <li><Icon url="log_in.svg"/></li>
        <li><Icon url="./img/log_out.svg"/></li>
        <li><Icon url="./img/cart.svg"/></li>
      </ul>
    </div>
  </nav>
 )   
}

export {Navbar}