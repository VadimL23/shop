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
import { CATEGORY_ROUTE } from 'config';

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
    getCategoryNameById: function (id: number) {
      console.log("Запустилась функция поиска имени категории");
      return self.typesOfProduct.find((el: any)=> id == el.id)?.name;
    },
    getProductByIdAndIdCategory: function (id: number, id_category: number) {
      console.log("Запустилась функция поиска обьекта товара");
      return self.typesOfProduct?.find((el: any)=> id_category == el.id)?.productsList?.find((el: any)=> id == el.id);

    },
  }));

export { ProductStore };
