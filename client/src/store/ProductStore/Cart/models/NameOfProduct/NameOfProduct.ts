import { types, getSnapshot, Instance } from 'mobx-state-tree';

export enum Weight {
  Primary = '300 г',
  Secondary = '500 г',
  Tertiary = '1 кг',
}

const NameOfProduct = types
  .model('NameOfProduct', {
    id: types.optional(types.number, 0),
    name: types.optional(types.string, ''),
    price: types.optional(types.number, 0),
    rate: types.optional(types.number, 0),
    description: types.optional(types.string, ''),
    img: types.optional(types.array(types.string), []),
    weight: types.optional(
      types.enumeration<Weight>('Weight', Object.values(Weight)),
      Weight.Primary
    ),
    quantity: types.optional(types.number, 0),
  })

  .views((self) => ({
    getSumm: function () {
      const arr = getSnapshot(self);
      let summ: number = 0;
      switch (self.weight) {
        case Weight.Primary:
          summ = 3 * self.quantity * self.price;
          break;

        case Weight.Secondary:
          summ = 5 * self.quantity * self.price;
          break;

        case Weight.Tertiary:
          summ = 10 * self.quantity * self.price;
          break;
      }
      return summ;
    },
  }));

export interface INameOfProduct extends Instance<typeof NameOfProduct> {}

export { NameOfProduct };
