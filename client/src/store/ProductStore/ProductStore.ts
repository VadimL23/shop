import {
  types,
  getSnapshot,
  flow,
  Instance,
  getType,
  getParent,
} from 'mobx-state-tree';
import { useApi } from 'hooks';
import axios from 'axios';
import { Cart, ICart } from './Cart';
import { NameOfProduct } from './Cart/models/NameOfProduct';
import { TypesOfProduct } from './Cart/models/TypesOfProduct';
import { BrandOfProduct } from './Cart/models/BrandOfProduct';
import { RateOfProduct } from './Cart/models/RateOfProduct';
import { MainSlider } from './MainSlider';

const ProductStore = types
  .model('mainStore', {
    typesOfProduct: types.optional(types.array(TypesOfProduct), []),
    active: types.safeReference(TypesOfProduct),
    cart: types.optional(Cart, {}),
    mainSlider: types.optional(types.array(MainSlider), []),
  })
  .actions((self) => {
    return {
      load: flow(function* () {
        self.typesOfProduct = yield axios
          .get('http://localhost:3001/category')
          .then((resp) => resp.data);
        self.mainSlider = yield axios
          .get('http://localhost:3001/mainSlider')
          .then((resp) => resp.data);
      }),
      afterCreate: function () {
        this.load();
      },
    };
  })
  .views((self) => ({
    getTypesOfProducts: function () {
      return getSnapshot(self.typesOfProduct);
    },
    getAllProducts: function () {
      return getSnapshot(self).typesOfProduct.map((el) => {
        return el.productsList;
      });
    },
    getProductById: function (id: number) {
      //        return self.getAllProducts().find((el)=>el.id == id);
      //        const result = self.typesOfProduct?.find((el)=>el.productsList.find((product)=>
      //            product.id == id
      //            ))
      //        if (typeof result !== "undefined") {return getSnapshot(result)}
    },
  }));

export { ProductStore };
