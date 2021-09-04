import React,{ useRef, useState, useMemo, forwardRef } from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {SearchCard} from "./components/SearchCard";
import {observer} from "mobx-react-lite";
import {useProductStore} from "hooks";
import {getSnapshot} from "mobx-state-tree";

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  isVisibleModal:true,
 
}

const SearchForm = forwardRef<HTMLInputElement, IProps>((props, ref) => {
    const refInput = useRef<HTMLInputElement | null>(null);   
    const {isVisibleModal} = props;
    const productStore = useProductStore();
    const {namesOfProduct} = productStore;
    const [selectSort, setSelectSort] = useState("name");
    const [searchQuery, setSearchQuery] = useState('');
    const snapshot = getSnapshot(namesOfProduct);
  
    
    const sortedProduct =  useMemo(()=>{
        return [...snapshot].sort((a,b)=>a["name"].localeCompare(b["name"]))
       },[selectSort, snapshot] );
        

    
    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedProduct.filter(product=>product["name"].toLowerCase().includes(searchQuery));
        
    },[searchQuery, sortedProduct]);    
    
    console.log(getSnapshot(namesOfProduct));
    
    return (
       
           <div className={cn(s.search_wrapper)}>
               <form
                 method="post"
                 id="searchForm"
                 name="searchForm"
                >
                 
        <label 
            onClick={(e)=>{e.stopPropagation();
                           alert("SEARCH")}}
            className={cn(s['label_search'])}
            htmlFor="searchInput">     
        </label>
                 
                 <input 
                  ref={ref}
                  value = {searchQuery}
                  onChange = {e => setSearchQuery(e.target.value)}
                  name="searcInput" 
                  id="searchInput" 
                  className={cn(s.search__input)}
                  placeholder="Начните поиск"
                  />
                   {sortedAndSearchedPosts.map((el)=>
                   <SearchCard 
                    key = {el.id}
                    product = {el}                              
                    />
                                                 
                    )}
                   
                  
                  
               </form>
               
           </div>
       )
       
      });
       
export {
      SearchForm,
      }