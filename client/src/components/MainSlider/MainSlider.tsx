import React from "react";
import Slider from "react-slick";
import s from "./style.module.scss";
import cn from "classnames";
import img1 from "../../assets/images/slider/1.jpg";
import img2 from "../../assets/images/slider/2.jpg";
import img3 from "../../assets/images/slider/3.jpg";
import img4 from "../../assets/images/slider/4.jpg";
import img5 from "../../assets/images/slider/5.jpg";

interface IProps {
    
}

const MainSlider = (props:IProps)=>{
   const settings = {
       dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
        
 
    };
    
    

    return (
      <div className={cn(s.slider__wrapper)}>
        
        <Slider {...settings} >
          <div>
            <h3>
              <img className={cn(s.slider__img)} src={img1} />
            </h3>
          </div>
          <div>
             <img className={cn(s.slider__img)} src={img2} />
          </div>
          <div>
            <h3>
             <img className={cn(s.slider__img)} src={img3} />
            </h3>
          </div>
          <div>
            <h3>
              <img className={cn(s.slider__img)} src={img4} />
            </h3>
          </div>
          <div>
            <h3>
              <img className={cn(s.slider__img)} src={img5} />
            </h3>
          </div>
         </Slider>
      </div>
    );
 }

export {
       MainSlider
      }
