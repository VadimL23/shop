import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Link, useParams, useLocation } from 'react-router-dom';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { getType, getSnapshot, onSnapshot } from 'mobx-state-tree';
import { useProductStore, useLocationStore } from 'hooks';
import { CategoryPanel } from 'components/CategoryPanel';
import { CategoryCard } from 'components/CategoryCard';
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

  const store = useProductStore();
  const [snapshot, setSnapshot] = useState(getSnapshot(store));
  onSnapshot(store, (sn) => {
    setSnapshot(sn);
  });
  const [nameCategory, setNameCategory] = useState("Каталог");
  const [nameProduct, setNameProduct] = useState("");
  const { typesOfProduct } = snapshot;

  const { id } = useParams<Params>();
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
    getCategoryNameById(id, typesOfProduct);
  })
  
  return (
    <div className={cn(s.main)} >
      <Location all={snapshot} nameCategory={nameCategory}/>
      <div className={cn(s.page_2)}>
        {typeof id !== 'undefined' ? (
          <div className={cn(s.panel__content)}>
            <CategoryPanel nameList={typesOfProduct} />
          </div>
        ) : (
          <div className={cn(s.panel__content)}>
            <CategoryPanel nameList={typesOfProduct} />     
          </div>
        )}
        {  nameCategory 
              ? 
                <div className={cn(s.title)}>{nameCategory}</div>
              : 
                null
        }
        <div className={cn(s.page__content)}>
          {snapshot?.typesOfProduct.length == 0 
            ? ( <Preloader isVisible={true} /> ) 
            : id === undefined 
              ? (
                  snapshot?.typesOfProduct.map((el) => (
                  <CategoryCard key={el.id} {...el} />
                    )
                  )
                )
              : (
                snapshot?.typesOfProduct[+id - 1].productsList.map((el) => (
                  <CategoryCard key={el.id} {...el} id_category={id} />
                  ))
                )
          }
        </div>
      </div>
    </div>
  );
});

export { CategoryPage };


