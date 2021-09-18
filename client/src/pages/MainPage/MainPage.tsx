import React, { ReactElement, useCallback } from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { Card } from 'components/Card';
import { MainSlider } from 'components/MainSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { CustomCard } from 'components/CustomCard';
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

  const Cards = useCallback(() => {
    return typesOfProduct[0].productsList.map((el) => {
      const { id, name, rate, price, img, quantity } = el;
      return <CustomCard key={el.id} {...el} />;
    });
  }, [typesOfProduct]);

  return (
    <>
      <MainSlider sliderList={sliderList} />

      {typesOfProduct.length == 0 ? (
        <Preloader isVisible={true} />
      ) : (
        <>
          <ProductsSlider productList={typesOfProduct[0].productsList}>
            {typesOfProduct[0].name}
          </ProductsSlider>

          <ProductsSlider productList={typesOfProduct[1].productsList}>
            {typesOfProduct[1].name}
          </ProductsSlider>
        </>
      )}

      {typesOfProduct.length == 0 ? (
        <Preloader isVisible={true} />
      ) : (
        <React.Fragment>
          <h2 className={s.product__list__title}>{typesOfProduct[0].name}</h2>
          <div className={s.product__list}>{Cards()}</div>
        </React.Fragment>
      )}
    </>
  );
});

export { MainPage };
