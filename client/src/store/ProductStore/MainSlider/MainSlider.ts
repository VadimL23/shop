import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

const MainSlider = types.model('MainSlider', {
  id: types.optional(types.number, 0),
  img: types.optional(types.string, ''),
  title: types.optional(types.string, ''),
  subtitle: types.optional(types.string, ''),
  background: types.optional(types.string, ''),
  color: types.optional(types.string, ''),
})
.actions(self=>({
    load:function*(){
        let self = yield axios.get("http://localhost:3001/slider");
    },
    afterCreate:function(){
      console.log("CREATE!!!");
        this.load();
    }
}));

export { MainSlider };
