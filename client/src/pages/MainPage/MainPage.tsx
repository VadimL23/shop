import React from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Card, cardData} from "components/Card";
import {MainSlider} from "components/MainSlider";
import {ProductsSlider} from "components/ProductsSlider";
import cardList from "config/constants/card";
import sliderList from "config/constants/slider";
import {useStore} from "hooks";
import {observer} from "mobx-react-lite";


interface IProps {
    className?: string  
}


const MainPage = observer((props:IProps) =>{
   const {className} = props; 
   const {isAuthenticated} = useStore();
  
    
    return (
       <>
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
    
});


export {  
    MainPage,
        }
        