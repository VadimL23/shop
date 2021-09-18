import React,{useRef, useState} from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {useProductStore} from "hooks";
import {getSnapshot} from "mobx-state-tree";
import {Weight} from "store/ProductStore/Cart/models/NameOfProduct";
import { ICart} from "store/ProductStore/Cart";


interface IProps extends ICart {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  description:string
}

const CustomCard = ({id,
            name,
            price,
            rate,
            img,
            quantity,
            weight,
            description}:IProps) => {
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);
    const [weightSelect, setWeightSelect] = useState<string>(Weight.Primary);
    const [quantitySelect, setQuantitySelect] = useState(1);
    const productsStore = useProductStore();
    const handleClickCart = (event: React.MouseEvent<HTMLElement>):void=>{
       event.preventDefault();
       event.stopPropagation();
          console.log(` handleClickCart weightSelect `, weightSelect);
       productsStore.cart.add(
           { id,
            name,
            price,
            rate,
            img,
            quantity:quantitySelect,
            weight:weightSelect});
          }
    

   
    const descriptionCutOff = (text:string):string =>{
        if (text.length > 59){
          return text.slice(0,59)+"...";             
        }
         return text;
    }
    
  console.log(` cart `, getSnapshot(productsStore.cart));
    
   return (
       <div className={cn(s.customcard)}>
          <img src={img[0]} alt={name} className={cn(s.customcard__img)}/>
          <div className={cn(s["customcard__content"])}>
          <span className={cn(s.customcard__title)}>{name}</span>
          <p ref={descriptionRef} className={cn(s.customcard__description)}>
              {descriptionCutOff(description)}
          </p>
          <form 
             name="cardForm"
             id="cardForm"
             className={cn(s.customcard__box)}>
              <div className={cn(s.customcard__item)}>
                  <span className={cn(s.customcard__item__title)}>Фасовка</span>
                  <select  
                      defaultValue = {weightSelect}
                      onChange={(e)=>{setWeightSelect(e.target.value)}}
                      className={cn(s.customcard__item__select)}>
                      <option className={cn(s.customcard__option)} defaultValue = {Weight.Primary}>{Weight.Primary}</option>
                      <option className={cn(s.customcard__option)}>{Weight.Secondary}</option>
                      <option className={cn(s.customcard__option)}>{Weight.Tertiary}</option>
                  </select>
              </div>
              <div className={cn(s.customcard__item)}>
                  <span className={cn(s.customcard__item__title)}>Кол-во</span>
                  <select 
                     defaultValue = {quantitySelect}
                     onChange={(e)=>{
                          setQuantitySelect(+e.target.value)}}
                     className={cn(s.customcard__item__select)}>
                      <option className={cn(s.customcard__option)} defaultValue={1}>1</option>
                      <option className={cn(s.customcard__option)}>2</option>
                      <option className={cn(s.customcard__option)}>3</option>
                   </select>
              </div>
          </form>
          <button 
             form = "cardForm"
             onClick = {handleClickCart}
             type="submit"
             className={cn(s.customcard__btn)}>
              В корзину
          </button>
               <div className={cn(s.customcard__text)}>
                  <span>Цена: </span>
                  <span className={cn(s.customcard__cost)}>
                   {price}
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