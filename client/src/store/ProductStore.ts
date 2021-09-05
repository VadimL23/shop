import {types, getSnapshot, flow} from "mobx-state-tree";
import {useApi} from "hooks";
import axios from "axios";


const NameOfProduct = types.model(
"NameOfProduct",
    {
    id:types.optional(types.number,0),
    name:types.optional(types.string,''),
    price:types.optional(types.number,0),
    rate:types.optional(types.number,0),
    img:types.optional(types.array(types.string),[])
});        
        
        
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


const BrandOfProduct = types.model(
"BrandOfProduct",
    {
        id:types.optional(types.number,0),
        name:types.optional(types.string,'')
    }
);

const RateOfProduct = types.model(
"RatingOfProduct",
    {
        id:types.optional(types.number,0),
        rate:types.optional(types.string,'')
    }
);




const ProductStore = types.model(
"mainStore",{
    typesOfProduct:types.optional(types.array(TypesOfProduct),[])
 }
).actions(self=>{
    return {
    load:flow(function*(){
     const t = yield axios.get("http://localhost:3001/category");
     self.typesOfProduct = t.data;
        
    }),
    afterCreate:function(){
    this.load(); 
        console.log(getSnapshot(self));
    }
}})
.views(self=>({
    getTypesOfProducts:function(){
        return getSnapshot(self.typesOfProduct);
    },
    getAllProducts:function(){
    return getSnapshot(self).typesOfProduct.map((el)=>{
           return el.productsList;
       })
//   ( a.lenght == 0) ?  [] : (a.reduce((summ,el)=>{
//        summ=summ || [];
//        return summ.concat(el);
//    }) );
        
    }

    
}));

export {
    ProductStore,
    NameOfProduct
}