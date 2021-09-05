import React,{useState} from "react";
import cn from "classnames";
import {Link, useParams} from "react-router-dom";
import s from "./style.module.scss";
import {observer} from "mobx-react-lite";
import {getType, getSnapshot, onSnapshot} from "mobx-state-tree";
import {useProductStore} from "hooks";
import {CategoryPanel} from "./components/CategoryPanel";
import {CategoryCard} from "./components/CategoryCard";
import {Preloader} from "components/Preloader";


type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  className?: string,
  children?: React.ReactNode,
}

type Params = {
    id?:string;
}


const CategoryPage = observer((props:IProps) => {
    const {getTypesOfProducts} = useProductStore();
   
    const store = useProductStore();
    const [snapshot, setSnapshot] = useState(getSnapshot(store));
    onSnapshot(store, (sn)=>{setSnapshot(sn)});
    
    const {id} = useParams<Params>();
  
    
    return (
       
    <div className={cn(s.page)}>
          
         {(typeof id ==="undefined")?
                
            
         (<div className={cn(s.panel__content)}>
             <CategoryPanel nameList={getTypesOfProducts()}/>
          </div>)
                :
           (<div className={cn(s.panel__content)}>
             
             <CategoryPanel nameList={getTypesOfProducts()}/>
          </div>)}
              
          <div className={cn(s.page__content)}>
       { (snapshot?.typesOfProduct.length == 0) ? 
          (<Preloader isVisible={true}/>)
          :( snapshot?.typesOfProduct.map((el)=>
              <CategoryCard 
              key = {el.id}
              nameList={getTypesOfProducts()}/>)
         )
            
          
           
        }
           </div>
           
       
       </div>
       )
       
      });
       
export {
      CategoryPage,
      }
      
      
//        <ul className={cn(s["panel__subgroup"])}>
//                           <li className={cn(s.panel__li)}>
//                               <a href="#">Lorem ipsum.</a>
//                           </li>
//                       </ul>