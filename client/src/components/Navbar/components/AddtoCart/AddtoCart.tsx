import React from "react";
import cn from "classnames";
import s from "./style.module.scss";


type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  isVisible:boolean
}

const AddtoCart = (props:IProps) => {
    const {isVisible} = props;
    const data:boolean = true;
    console.log(isVisible);
    return (
       <div id={"addtoCart"} className={cn({[s["addto"]]:true,
                                           [s["addto__active"]]:isVisible})}>
                <div className={cn(s["addto__title"])}><span>Корзина</span></div>
                <div className={cn(s["addto__goods"],s["cart__goods"])}>
                {data ?
                   ( <div className={cn(s["goods__items"])}>
                        <div className={s["goods__item"]}>
                              <div className={s["goods__image"]}>
                                <a href="http://lorempixel.com/160/160/nature" title="pictures">
                                    <img src="https://i5.stat01.com/2/3696/136951973/baec64/arahis-blanshirovannyj.jpg" alt="Арахис бланшированный" className={s["goods-image-icon"]} />
                                </a>
                              </div>
                              <div className={s["goods__shop"]}>

                                <a href="https://abricoss.ru/goods/Arahis-blanshirovannyj-3" className={s["goods__name"]} title="Арахис бланшированный">
                                    Арахис бланшированный
                                </a>
                                <div className={s["goods__mod"]}>
                                    (Вес: 100 гр)
                                </div>        
                                <div className={s["goods__priceBox"]}>
                                  <div className={s["goods__price"]} >
                                      <span title="26 Российских рублей">
                                      
                                      <span className={s["num"]}>26&nbsp;</span> 
                                      <span>рублей</span>
                                      </span>
                                  </div>
                                  <div className={s["goods__count"]}>
                                      1 шт.
                                  </div>

                                  <a href="https://abricoss.ru/cart/delete/129689412/?from=https%3A%2F%2Fabricoss.ru%2Fcart%2Fadd%2F" 
                                   className={cn(s["goods__remove"])} 
                                   title="Удалить позицию" 
                                   >&times;
                                    </a>
                                </div>
                              </div>
                        </div>

                   
                    <div className={cn(s["box"])}>
                        <button className={cn(s["btn"])}>Очистить</button>
                        <button className={cn(s["btn"],s["btn__active"])}>В корзину</button>
                      
                   
                   </div>
                   
                    </div>
                   
                  
                   
                   )
                    
                    :

                    ( <div className={cn(s["goods__empty"])}>
                       <div>В корзине пока ничего нет</div>
                       <a href="https://abricoss.ru/catalog" className={cn(s["btn"])} title="Продолжить покупки">Продолжить покупки</a>
                     </div>)
                }
                     
                  </div>
    </div>
       )
       
      }
       
export {
      AddtoCart,
      }