import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {name} from "../CategoryPanel";


type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  nameList:name[],

}

const CategoryCard = (props:IProps) => {
  
 
 
    return (
        
      <div className={cn(s.card)}>
        <span className={cn(s.card__title)}></span>
         <img src={"http://lorempixel.com/280/230/food"} alt="" className={cn(s["card__img"])}/>
                
      </div>
           
  
       )
       
      }
       
export {
      CategoryCard,
      }