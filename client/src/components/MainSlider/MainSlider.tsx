import React from "react";
import Slider from "react-slick";
import s from "./style.module.scss";
import cn from "classnames";
import path from "path";
import sliderList from "config/constants/slider";
import "./style.scss";
import {useProductStore} from "hooks";
import {getSnapshot} from "mobx-state-tree";
import {observer} from "mobx-react-lite";

interface IProps {
  children?:React.ReactElement[],
  sliderList?:Object
}

const MainSlider = observer((props:IProps)=>{
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,

    };
const productStore = useProductStore();
//const {id,img,subtitle,title,color,background} =getSnapshot(productStore.mainSlider);  
const list = getSnapshot(productStore.mainSlider); 
     
return (
      <div className={cn(s.slider__wrapper)}>
        <Slider {...settings} >
           {list.map((el,index)=>{
                
                return(
                <div
                   key = {el.id} 
                   className={cn(s["slider_item"])} >
                    <div className={cn(s["slider_item_textbox"])} style={{backgroundColor:`${el.background}`, color:`${el.color}`}}>
                         <span className={cn(s["slider_item-title"])}>{el.title}</span>  
                         <span className={cn(s["slider_item-subtitle"])}>{el.subtitle}</span>  
                    </div>
                    <h3 className={cn(s["slider_img_box"])}>
                          <img 
                          className={cn(s.slider__img)} 
                          src={el.img} />
                    </h3>
                </div>
                );
            })}
         </Slider>
      </div>
    );
 });

export {
       MainSlider
      }
