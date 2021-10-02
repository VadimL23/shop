import React from 'react';
import cn from 'classnames';
import s from 'style.module.scss';
import { Product } from 'components/Product';
import { Location } from 'components/Location';
import product_data from 'config/constants/product_data';
import path from 'path';
import { useProductStore } from 'hooks';
import { getSnapshot } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';
type IProps = {
  //onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  //className?: string,
  //children?: React.ReactNode,
};

const InfoPage = observer((props: any) => {
  const id = props.match.params.id;
  console.log(props);
  const productStore = useProductStore();
  //  const {id, name, quantity, price, rate} =  productStore.getProductById(13);
  console.log(`product `, productStore.getAllProducts());

  return (
    <>
      <Location />
      <Product
        id={id}
        title={product_data.title}
        description={product_data.description}
        rate={product_data.rate}
        img={product_data.img}
      />
    </>
  );
});

export { InfoPage };
