import React, { ReactElement, useCallback, useState } from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { Card } from 'components/Card';
import { MainSlider } from 'components/MainSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { CustomCard } from 'components/CustomCard';
import { CategoryCard } from 'components/CategoryCard';
import sliderList from 'config/constants/slider';
import { useStore } from 'hooks';
import { useProductStore } from 'hooks';
import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import { Preloader } from 'components/Preloader';

interface IProps {
  className?: string;
}

const MainPage = observer((props: IProps) => {
  const { className } = props;
  const { isAuthenticated } = useStore();
  const productsStore = useProductStore();
  const { typesOfProduct } = getSnapshot(productsStore);
  const store = useProductStore();
  const [snapshot, setSnapshot] = useState(getSnapshot(store)); 
    
  const Cards = useCallback(() => {
   return    snapshot?.typesOfProduct[0]?.productsList.map((el,i) => (
                  <CategoryCard key={el.id} {...el} id_category={i} />
                  ))
    }
  , [typesOfProduct]);

  return (
    <>
      <MainSlider sliderList={sliderList} />
 
      <div className={s.product__list}>{Cards()}</div>

    </>
  );
});

export { MainPage };


 


