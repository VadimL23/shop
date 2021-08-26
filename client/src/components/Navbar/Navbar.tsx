import React from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Avatar} from "components/Navbar/Avatar";
import {Icon} from "components/Navbar/Icon";
import  cart from "./Icon/img/cart.svg";
import log_out from "./Icon/img/log_out.svg";
import log_in from "./Icon/img/log_in.svg";
import private_page from "./Icon/img/private_page.svg";

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
        <li><Icon url={private_page}/></li>
        <li><Icon url={log_in}/></li>
        <li><Icon url={log_out}/></li>
        <li><Icon url={cart}/></li>
      </ul>
    </div>
  </nav>
 )   
}

export {Navbar}