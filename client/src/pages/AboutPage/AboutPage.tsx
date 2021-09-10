import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

type IProps = {
  //onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  //className?: string,
  //children?: React.ReactNode,
}

const AboutPage = () => {
  return (
    <div className={cn(s.about_block)}>
      <p className={cn(s.about_text_title)}>Bon Appetite - интернет-магазин с доставкой полезных орехов.</p>
      <p className={cn(s.about_text)}>Наша молодая команда каждый день старается, чтобы ты получал качественные орешки, а также хорошую и быструю доставку. 
      Мы постоянно думаем об улучшении и наш сервис совершенствуется!</p>
      <p className={cn(s.about_text)}>Не скрываем ни одного отрицательного отзыва, их мало, но все равно мы стараемся свести наши «косяки» к минимуму! Ведь здоровую критику никто не отменял :)</p>
      <p className={cn(s.about_text)}>Мы будем очень рады общению с тобой и совсем не обязательно только на тему орешков :)
      Пиши и звони нам, ни одно сообщение не остается без внимания. Расширяемся и  повышаем кругозор дальше!</p>
      <p className={cn(s.about_text)}>Bon Appetite!</p>
    </div>
    )
  }
       
export {
    AboutPage,
    }