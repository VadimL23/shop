import React,{ useRef, useState, useMemo, forwardRef } from "react";
import cn from "classnames";
import s from "./style.module.scss";
import {SearchCard} from "./components/SearchCard";
import {Preloader} from "components/Preloader";
import {observer} from "mobx-react-lite";
import {useProductStore} from "hooks";
import {getSnapshot} from "mobx-state-tree";



type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
  snapshot?:[]
}

const SearchForm = forwardRef<HTMLInputElement, IProps | null>((props, ref) => {
    const refInput = useRef<HTMLInputElement | null>(null);   
    
    const productStore = useProductStore();
  
    const {typesOfProduct} = productStore;
    
    const [selectSort, setSelectSort] = useState("name");
    const [searchQuery, setSearchQuery] = useState('');
    const snapshot = getSnapshot(typesOfProduct);
  
   
const allProducts = [...snapshot].map(el=>el.productsList).reduce((res,el)=>{
         res=res||[];
        return res.concat(el)});;
    
const sortedProduct =  useMemo(()=>{
        return allProducts.sort((a,b)=>a["name"].localeCompare(b["name"]))
       },[selectSort, snapshot] );
        

    
    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedProduct.filter(product=>product["name"].toLowerCase().includes(searchQuery));
        
console.log("All product", allProducts);
console.log("sorted", sortedProduct);
        
    },[searchQuery, sortedProduct]);    
    
 
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