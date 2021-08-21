import React from "react";
import s from "./style.module.scss";
import cn from "classnames";


interface IProps {
    className?: string  
}


const MainPage = (props:IProps) =>{
   const {className} = props; 
            
    return (
       <>
            
        <h1 className = {className}>Main page</h1>
        <br />
        <h2>Welcome to the main page of shop!</h2>
            
        </>
    )
    
}


export {  
    MainPage,
        }
        