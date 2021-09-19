import {useEffect} from "react";

export const useScrollBodyTop = () => {
    useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[]);
}