import React from "react";
import s from "./style.module.scss";
import cn from "classnames";

const Avatar = () =>{
 
 return ( 
    <div className={cn(s.avatar_block)}>
      BON&thinsp;
    
          <a className={cn(s.avatar_img)}/>
        
      &thinsp;Appetite
    </div>   
 )   
}

export {Avatar}