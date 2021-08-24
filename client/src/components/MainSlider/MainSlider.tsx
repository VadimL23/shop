import React from "react";
import Slider from "react-slick";
import s from "./style.module.scss";
import cn from "classnames";
import path from "path";
import sliderList from "config/constants/slider";
import "./style.scss";

interface IProps {
  children?:React.ReactElement[],
  sliderList?:Object
}

const MainSlider = (props:IProps)=>{
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,

    };
return (
      <div className={cn(s.slider__wrapper)}>
        <Slider {...settings} >
           {sliderList.map((el,index)=>{
                
                return(
                <div className={cn(s["slider_item"])} >
                    <div className={cn(s["slider_item_textbox"])} style={{backgroundColor:`${el.background}`, color:`${el.color}`}}>
                         <span className={cn(s["slider_item-title"])}>{el.title}</span>  
                         <span className={cn(s["slider_item-subtitle"])}>{el.subtitle}</span>  
                    </div>
                    <h3 className={cn(s["slider_img_box"])}>
                          <img 
                          className={cn(s.slider__img)} 
                          src={path.resolve(__dirname,`./images/slider/${el.img}`)} />
                    </h3>
                </div>
                );
            })}
         </Slider>
      </div>
    );
 }

export {
       MainSlider
      }
