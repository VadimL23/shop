import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Link, useParams, useLocation } from 'react-router-dom';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { getType, getSnapshot, onSnapshot } from 'mobx-state-tree';
import { useProductStore, useLocationStore } from 'hooks';
import { CategoryPanel_2 } from './components/CategoryPanel_2';
import { CategoryCard_2 } from './components/CategoryCard_2';
import { Preloader } from 'components/Preloader';
import { Location } from 'components/Location';
import { Divider } from '@material-ui/core';

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
};

type Params = {
  id?: string;
};

const CategoryPage = observer((props: IProps) => {

  //const { getTypesOfProducts } = useProductStore();
  const store = useProductStore();
  const [snapshot, setSnapshot] = useState(getSnapshot(store));
  onSnapshot(store, (sn) => {
    setSnapshot(sn);
  });
  const [nameCategory, setNameCategory] = useState("Каталог");
  const [nameProduct, setNameProduct] = useState("");
  const { typesOfProduct } = snapshot;

  const { id } = useParams<Params>();
  console.log(id);
  function getCategoryNameById (id: any, array: any) {
    if (id) {
      array.forEach((el: any) => {
        if (id == el.id) {
        setNameCategory(el.name);
        }
      });
    } else {
      setNameCategory("Каталог");
    }
  }

  useEffect(() => {
    //console.log(`Сработало после создания страницы ${id}`);
    getCategoryNameById(id, typesOfProduct);
    //getCategoryNameById(id, typesOfProduct);
  })
  return (
    <div className={cn(s.main)} >
      <Location all={snapshot} nameCategory={nameCategory}/>
      <div className={cn(s.page_2)}>
        {typeof id === 'undefined' ? (
          <div className={cn(s.panel__content)}>
            <CategoryPanel_2 nameList={typesOfProduct} />
          </div>
        ) : (
          <div className={cn(s.panel__content)}>
            <CategoryPanel_2 nameList={typesOfProduct} />
          </div>
        )}
        {  nameCategory 
              ? 
                <div className={cn(s.title)}>{nameCategory}</div>
              : 
                <div></div>
        }
        <div className={cn(s.page__content)}>
          {snapshot?.typesOfProduct.length == 0 
            ? ( <Preloader isVisible={true} /> ) 
            : id === undefined 
              ? (
                  snapshot?.typesOfProduct.map((el) => (
                  <CategoryCard_2 key={el.id} {...el} />
                    )
                  )
                )
              : (
                snapshot?.typesOfProduct[+id - 1].productsList.map((el) => (
                  <CategoryCard_2 key={el.id} {...el} id_category={id} />
                  ))
                )
          }
        </div>
      </div>
    </div>
  );
});

export { CategoryPage };

//
//        <ul className={cn(s["panel__subgroup"])}>
//                           <li className={cn(s.panel__li)}>
//                               <a href="#">Lorem ipsum.</a>
//                           </li>
//                       </ul>
