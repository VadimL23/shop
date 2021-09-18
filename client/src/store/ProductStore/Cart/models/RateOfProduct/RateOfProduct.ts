import { types } from 'mobx-state-tree';

const RateOfProduct = types.model('RatingOfProduct', {
  id: types.optional(types.number, 0),
  rate: types.optional(types.string, ''),
});

export { RateOfProduct };
