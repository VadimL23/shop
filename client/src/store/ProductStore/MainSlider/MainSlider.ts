import { types } from 'mobx-state-tree';

const MainSlider = types.model('MainSlider', {
  id: types.optional(types.number, 0),
  img: types.optional(types.string, ''),
  title: types.optional(types.string, ''),
  subtitle: types.optional(types.string, ''),
  background: types.optional(types.string, ''),
  color: types.optional(types.string, ''),
});

export { MainSlider };
