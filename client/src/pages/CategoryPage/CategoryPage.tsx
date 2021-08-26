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
                   <li className={cn(s.panel__li, s.panel__li_group, s["panel__li_group--active"])}>
                   <a href="#">Lorem ipsum dolor.</a>
                       <ul className={cn(s["panel__subgroup"])}>
                           <li className={cn(s.panel__li)}>
                               <a href="#">Lorem ipsum.</a>
                           </li>
                       </ul>
                   </li>
               
               </ul>
          </div>
            
          
            <div className={cn(s.page__content)}>
               
             sdfsdf
           </div>
           
       
       </div>
       )
       
      }
       
export {
      CategoryPage,
      }