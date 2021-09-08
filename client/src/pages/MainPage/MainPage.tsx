import React,{ReactElement} from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Card, cardData} from "components/Card";
import {MainSlider} from "components/MainSlider";
import {ProductsSlider} from "components/ProductsSlider";
import {CustomCard} from "components/CustomCard";
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
 
    
    const cards = (count:number):ReactElement[]=>{        
        const temp:ReactElement[] = [];
        for (let i = 0; i<count;i++){
            temp.push(<CustomCard />)
        }
        return temp;
        }
    
    
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
        
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",flex:"1 0 21%"}}>
         {cards(4)}
        </div>
        
    </>
    )
    
});


export {  
    MainPage,
        }
        