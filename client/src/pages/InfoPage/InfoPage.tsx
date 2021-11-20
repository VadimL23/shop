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
  const id_category = props.match.params.id_category;
  const productsStore = useProductStore();

  console.log(props);
  const productStore = useProductStore();
  //  const {id, name, quantity, price, rate} =  productStore.getProductById(13);
  //const productsList = productStore.getTypesOfProducts();
  //console.log(productsList);
  const categoryName: any = productStore.getCategoryNameById(id_category);
  const productObject: any = productStore.getProductByIdAndIdCategory(id,id_category);
  console.log(categoryName);
  console.log(productObject);

  const addProductToCart = (el: any) => {
    el.stopPropagation();
    productsStore.cart.add(props);
  };


  return (
    <>
      
      {
        productObject ?
        <div>
          <Location nameCategory={categoryName} productName={productObject.name}/>
          <Product
          id={productObject.id}
          title={productObject.name}
          description={productObject.description}
          rate={productObject.rate}
          img={productObject.img}
          price={productObject.price}
          addProductToCart={addProductToCart}
          />
        </div>
        : <div></div>
      }
    </>
  );
});

export { InfoPage };
