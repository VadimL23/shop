import React,{ Dispatch, useRef, useEffect} from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {SearchForm} from "./components/SearchForm"


type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  isVisibleModal:boolean,
  setVisibleModal:Dispatch<any>
}



const Popup = (props:IProps) => {
    const {children,isVisibleModal,setVisibleModal} = props; 
         
    const inputRef = useRef<HTMLInputElement>(null);
    console.log(inputRef.current);
    
    useEffect(()=>{
        if (inputRef.current) {inputRef.current.focus();}
    },[isVisibleModal])
    
    return (
     <div 
       onClick = {(e)=>{setVisibleModal(false)}}
       className={cn(s['overlay'],{[s.active]:isVisibleModal})}>
        <div 
          onClick={(e)=>{e.stopPropagation()}}
          className={cn(s.overlay__content)}>
           
           <SearchForm ref={inputRef} isVisibleModal/>
           {children}
        </div>
     </div>
       )
       
      };
       
export {
      Popup,
      }