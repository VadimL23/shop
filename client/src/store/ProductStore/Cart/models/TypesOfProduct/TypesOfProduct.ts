import {types, getSnapshot} from "mobx-state-tree";
import {NameOfProduct} from "../NameOfProduct";

const TypesOfProduct = types.model(
"typesOfProduct",
    {
        id:types.optional(types.number,0),
        name:types.optional(types.string,''),
        img:types.optional(types.array(types.string),[]),
        productsList:types.optional(types.array(NameOfProduct),[ ])
    }
)
.views(self=>({
    
    getProductsList: function(){
        return getSnapshot(self.productsList);
    }
}));

export{
  TypesOfProduct  
}