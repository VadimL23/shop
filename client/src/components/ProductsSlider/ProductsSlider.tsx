import React,{useEffect} from "react";
import cn from "classnames";
import s from "./style.module.scss";
import Slider from "react-slick";
import {Card} from "components/Card";
import {ICart} from "store";


type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  productList?:ICart[],
 
}

const ProductsSlider = (props:IProps) => {
    const {productList, children}= props;
    
    var settings = {
      dots: false,
      infinite: true,
      slideToScroll:1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };  
    
const slideToShow = Math.min(Math.floor(window.screen.width/280),4); 
     return (
        <div>
        {children ? <h2 className={cn(s.slider__title)}>{children}
       </h2>:""}
        <Slider
            {...settings }
             slidesToShow = {slideToShow}
          >
            {productList && productList.map((cardData)=>        
                 <Card key = {cardData.id} {...cardData} />
            )}
        </Slider>
        </div>
        )
       }
       
export {
      ProductsSlider,
      }