import React,{useState} from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {useProductStore} from "hooks";
import {getSnapshot} from "mobx-state-tree";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import cart_full from "assets/Navbar/cart_full.png";
import cart_empty from "assets/Navbar/cart_empty.png";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  isVisible:boolean
}

const AddtoCart = observer((props:IProps) => {
    const {isVisible} = props;
    const [selfVisible,setSelfVisible] = useState(isVisible);
    const data:boolean = true;
    const productsStore = useProductStore();
    const {productList:list} = getSnapshot(productsStore.cart);
    const history = useHistory();
    return (
       <div id={"addtoCart"} className={cn({[s["addto"]]:true,
                                           [s["addto__active"]]:isVisible})}>
                <div className={cn(s["addto__title"])}>
                    {(list.length == 0) ?
                        
                    (<img src={cart_empty} 
                     alt="Корзина пуста"
                     className={s.cart__img}
                     />
                    )
                    :
                    (
                    <img src={cart_full} 
                     alt="Полная корзинка"
                     className={s.cart__img}
                     />
                    )}
                </div>
                <div className={cn(s["addto__goods"],s["cart__goods"])}>
                {(list.length != 0) ?
                   ( <div className={cn(s["goods__items"])}>
                        {list.map((el)=>{
                                return(
                        <div key={el.id} className={s["goods__item"]}>
                              <div className={s["goods__image"]}>
                                <a href="http://lorempixel.com/160/160/nature" title={el.name}>
                                    <img src={el.img[0]} alt={el.name} className={s["goods-image-icon"]} />
                                </a>
                              </div>
                              <div className={s["goods__shop"]}>

                                <a href="https://abricoss.ru/goods/Arahis-blanshirovannyj-3" 
                                   className={s["goods__name"]} 
                                   title={el.name}>
                                   {el.name}
                                </a>
                                <div className={s["goods__mod"]}>
                                  { el.quantity}
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
                                  <a href="#" 
                                   className={cn(s["goods__remove"])} 
                                   title="Удалить позицию" 
                                   onClick={(e)=>{e.preventDefault();productsStore.cart.delete(el.id)}}
                                   >
                                   &times;
                                    </a>
                                </div>
                              </div>
                        </div>)
                       }) }
                   
                    <div className={cn(s["box"])}>
                        <button 
                        className={cn(s["btn"])}
                        onClick={()=>{productsStore.cart.clear()}}  >
                            Очистить
                        </button>
                        <button
                        onClick={(e)=>{e.preventDefault();}}
                        className={cn(s["btn"],s["btn__active"])}>
                        В корзину
                        </button>
                   </div>
                   </div>
                   
                   )
                    
                    :

                    ( <div className={cn(s["goods__empty"])}>
                       <div>В корзине пока ничего нет</div>
                       <a href="/" className={cn(s["btn"])} title="Продолжить покупки">Продолжить покупки</a>
                     </div>)
                }
                     
                  </div>
    </div>
       )
       
      });
       
export {
      AddtoCart,
      }