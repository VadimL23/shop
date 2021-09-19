import { types, getSnapshot, flow } from 'mobx-state-tree';
import { NameOfProduct } from '../NameOfProduct';
import axios from 'axios';

const TypesOfProduct = types
  .model('typesOfProduct', {
    id: types.optional(types.number, 0),
    name: types.optional(types.string, ''),
    img: types.optional(types.array(types.string), []),
    productsList: types.optional(types.array(NameOfProduct), []),
  })
  .actions((self) => {
    return {
      load: flow(function* () {
        self.productsList = yield axios
          .get('http://localhost:5000/api/product')
          .then((resp) => {
          console.log("here " ,resp.data);
          });
      }),
      afterCreate: function () {
        this.load();
      },
    };
  })
  .views((self) => ({
    getProductsList: function () {
      return getSnapshot(self.productsList);
    },
  }));

export { TypesOfProduct };
