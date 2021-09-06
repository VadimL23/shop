import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {name} from "../CategoryPanel";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  id:number,
  name:string,
  img:string[],
  productList?:any,
  nameList?:any

}

const CategoryCard = observer((props:IProps) => {
 const history = useHistory();      
 const {id,name,img} = props;

   return (
        
      <div className={cn(s.card)}
       onClick={(el)=>{
                el.stopPropagation();
                history.push("/info/"+`${id}`);
            }}
       >
        <span className={cn(s.card__title)}></span>
         <img src={img[0]} alt={name} className={cn(s["card__img"])}/>
                
      </div>
           
  
       )
       
      })
       
export {
      CategoryCard,
      }