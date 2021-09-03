import React from "react";
import cn from "classnames";
import s from "style.module.scss";
import {Product} from "components/Product";
import product_data from "config/constants/product_data";
import path from "path";

type IProps = {
  //onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  //className?: string,
  //children?: React.ReactNode,
}

const InfoPage = (props: any) => {
  const id = props.match.params.id; 
  return (
    <>
      <Product 
        id={id}
        title={product_data.title}
        description={product_data.description}
        rate={product_data.rate}
        img={product_data.img}      
      />
    </>
    )
  }
       
export {
      InfoPage,
      }