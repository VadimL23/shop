import React,{useRef} from "react";
import cn from "classnames";
import s from "./style.module.scss";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
}

const CustomCard = (props:IProps) => {
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);
    const text = "Древо жизни - не вымышленное растение и не герой библиотечных притч оно проистерает свои деревья на многие многие дали в глубь и в пространство времен.";
    
    const description = (text:string):string =>{
        if (text.length > 59){
          return text.slice(0,59)+"...";             
        }
         return text;
    }
    
   return (
       <div className={cn(s.customcard)}>
          <img src={"http://lorempixel.com/285/280/nature"} alt={"nature"} className={cn(s.customcard__img)}/>
          <div className={cn(s["customcard__content"])}>
          <span className={cn(s.customcard__title)}>Фисташки жаренные соленые экстра</span>
          <p ref={descriptionRef} className={cn(s.customcard__description)}>
              {description(text)}
          </p>
          <div className={cn(s.customcard__box)}>
              <div className={cn(s.customcard__item)}>
                  <span className={cn(s.customcard__item__title)}>Фасовка</span>
                  <select className={cn(s.customcard__item__select)}>
                      <option className={cn(s.customcard__option)} selected>500 г</option>
                      <option className={cn(s.customcard__option)}>300 г</option>
                      <option className={cn(s.customcard__option)}>1 кг</option>
                  </select>
              </div>
              <div className={cn(s.customcard__item)}>
                  <span className={cn(s.customcard__item__title)}>Кол-во</span>
                  <select className={cn(s.customcard__item__select)}>
                      <option className={cn(s.customcard__option)} selected>1</option>
                      <option className={cn(s.customcard__option)}>2</option>
                      <option className={cn(s.customcard__option)}>3</option>
                   </select>
              </div>
          </div>
          <button className={cn(s.customcard__btn)}>
              В корзину
          </button>
               <div className={cn(s.customcard__text)}>
                  <span>Цена: </span>
                  <span className={cn(s.customcard__cost)}>
                   100  
                  </span>
                   <span className={cn(s.customcard__cost,s.customcard__cost)}>
                   &nbsp;руб.
                  </span>
                </div>
        </div>
           </div>
       
       )
       
      }
       
export {
      CustomCard,
      }