import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {useLocation, Link} from "react-router-dom";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
}

const Location = (props:IProps) => {
    const location = useLocation();
    const locationArray = location.pathname.split("/");
    locationArray.splice(0,1,"/");
  
    
    function split(arr:string[],index:number){
        let temp = 0;
        return arr.reduce((summ,el)=>{
            if (temp<index){
                temp++;
                return summ =summ.concat(el,"/");
            }
            return summ;
            
        })
    }
    
   return (
     <div className={cn(s.location)}>
        
            <Link to={`/`} className={cn(s.link)}>
                {"home"}
             </Link>
            {locationArray.map((el,index,arr)=>
                 
            <Link to={`${split(arr,index)}`} key={index} className={cn(s.link)}>
                {el +"/"}
            </Link>
               )}
         
     </div>
       )
       
      }
       
export {
      Location,
      }