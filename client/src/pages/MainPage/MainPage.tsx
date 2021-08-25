import React from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Card, cardData} from "components/Card";
import {MainSlider} from "components/MainSlider";
import {ProductsSlider} from "components/ProductsSlider";
import cardList from "config/constants/card";
import sliderList from "config/constants/slider";
import {useStore} from "hooks";

interface IProps {
    className?: string  
}


const MainPage = (props:IProps) =>{
   const {className} = props; 
   const store = useStore();
    console.log(store.isAuntificated);
    
    return (
       <>
            
        <h1 className = {className}>Main page</h1>
         <MainSlider 
          sliderList={sliderList}
         />
        
        <ProductsSlider productList = {cardList}>
        Новинки
        </ProductsSlider>
        
         <ProductsSlider productList = {cardList}>
        Популярные товары
        </ProductsSlider>
        
      </>
    )
    
}


export {  
    MainPage,
        }
        