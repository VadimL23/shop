import React, { useState } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { getType, getSnapshot, onSnapshot } from 'mobx-state-tree';
import { useProductStore } from 'hooks';
import { CategoryPanel } from './components/CategoryPanel';
import { CategoryCard } from './components/CategoryCard';
import { Preloader } from 'components/Preloader';
import { Location } from 'components/Location';

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
};

type Params = {
  id?: string;
};

const CategoryPage = observer((props: IProps) => {
  const { getTypesOfProducts } = useProductStore();

  const store = useProductStore();
  const [snapshot, setSnapshot] = useState(getSnapshot(store));
  onSnapshot(store, (sn) => {
    setSnapshot(sn);
  });

  const { id } = useParams<Params>();

  return (
    <>
      <Location />

      <div className={cn(s.page)}>
        {typeof id === 'undefined' ? (
          <div className={cn(s.panel__content)}>
            <CategoryPanel nameList={getTypesOfProducts()} />
          </div>
        ) : (
          <div className={cn(s.panel__content)}>
            <CategoryPanel nameList={getTypesOfProducts()} />
          </div>
        )}
        <div className={cn(s.page__content)}>
          {snapshot?.typesOfProduct.length == 0 ? (
            <Preloader isVisible={true} />
          ) : id === undefined ? (
            snapshot?.typesOfProduct.map((el) => (
              <CategoryCard key={el.id} {...el} />
            ))
          ) : (
            snapshot?.typesOfProduct[+id - 1].productsList.map((el) => (
              <CategoryCard key={el.id} {...el} />
            ))
          )}
        </div>
      </div>
    </>
  );
});

export { CategoryPage };

//
//        <ul className={cn(s["panel__subgroup"])}>
//                           <li className={cn(s.panel__li)}>
//                               <a href="#">Lorem ipsum.</a>
//                           </li>
//                       </ul>
