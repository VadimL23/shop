import {types} from "mobx-state-tree";

const BrandOfProduct = types.model(
"BrandOfProduct",
    {
        id:types.optional(types.number,0),
        name:types.optional(types.string,'')
    }
);

export {
    BrandOfProduct
    
}