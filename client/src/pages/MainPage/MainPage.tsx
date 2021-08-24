import React from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Card, cardData} from "components/Card"
import {MainSlider} from "components/MainSlider";
import {ProductsSlider} from "components/ProductsSlider";
import cardList from "config/constants/card";
import sliderList from "config/constants/slider"

interface IProps {
    className?: string  
}


const MainPage = (props:IProps) =>{
   const {className} = props; 

    
    
    return (
       <>
            
        <h1 className = {className}>Main page</h1>
         <MainSlider 
          sliderList={sliderList}
         />
        
        <ProductsSlider productList = {cardList}/>
        
      </>
    )
    
}


export {  
    MainPage,
        }
        