import { types } from 'mobx-state-tree';

const LocationStore = types.model('locationStore', {
  backPath: types.optional(types.string, ""),
})
.actions((self) => ({
  change: function () {
    console.log("Сработал метод change");
    return "hello";
  },
}));

export { LocationStore };
