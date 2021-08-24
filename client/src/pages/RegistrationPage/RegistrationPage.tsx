import React from "react";
import cn from "classnames";
import s from "style.module.scss";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
}

const RegistrationPage = (props:IProps) => {
       return (
       <>
       Registration Page!!!
       </>
       )
       
      }
       
export {
      RegistrationPage,
      }