import React from "react";
import s from "./style.module.scss";
import cn from "classnames";

interface IProps {
  url: string;
}

const Icon = (props: IProps) =>{
 
 return ( 
    <div className={cn(s.icon_block)}>
      
          <img src={props.url} className={cn(s.icon_img)}/>
        
    </div>   
 )   
}

export {Icon}