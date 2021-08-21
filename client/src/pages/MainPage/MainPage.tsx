import React from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {MainSlider} from "../../components/MainSlider"

interface IProps {
    className?: string  
}


const MainPage = (props:IProps) =>{
   const {className} = props; 
            
    return (
       <>
            
        <h1 className = {className}>Main page</h1>
   
        
        <MainSlider />
        
        </>
    )
    
}


export {  
    MainPage,
        }
        