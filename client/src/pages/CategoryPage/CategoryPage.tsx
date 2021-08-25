import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
}

const CategoryPage = (props:IProps) => {
       return (
       
    <div className={cn(s.page)}>
          
         <div className={cn(s.panel__content)}>
               <ul className={cn(s["panel__group"])}>
                   <li className={cn(s.panel__li)}>Lorem ipsum dolor.</li>
                   <li className={cn(s.panel__li)}>Lorem ipsum dolor.</li>
                   <li className={cn(s.panel__li)}>Lorem ipsum dolor.</li>
                   <li className={cn(s.panel__li)}>Lorem ipsum dolor.</li>
                   <li className={cn(s.panel__li)}>Lorem ipsum dolor.</li>
                   
               </ul>
         
            </div>
            
           <div className={cn(s.page__content)}>
               
               adasdasdsd
           </div>
           
       
       </div>
       )
       
      }
       
export {
      CategoryPage,
      }