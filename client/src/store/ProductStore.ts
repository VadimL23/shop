import {types, getSnapshot, flow, Instance, getType} from "mobx-state-tree";
import {useApi} from "hooks";
import axios from "axios";


const NameOfProduct = types.model(
"NameOfProduct",
    {
    id:types.optional(types.number,0),
    name:types.optional(types.string,''),
    price:types.optional(types.number,0),
    rate:types.optional(types.number,0),
    img:types.optional(types.array(types.string),[]),
  //  weight:types.optional(types.enumeration("weight",["100 г","500 г","1 кг"]),"100 г"),
    quantity:types.optional(types.number,0)
});        
        
export interface INameOfProduct extends Instance<typeof NameOfProduct> {};


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



const Cart = types.model(
    "Cart",
    {
     productList:types.optional(types.array(NameOfProduct),[])   
    })
.actions(self=>{
    return{
        add:function(id:number, 
                      name:string, 
                      price:number, 
                      rate:number, 
                      img:string[], 
                      quantity:number)
        {
          self.productList.push(NameOfProduct.create({id,name,price,rate,img,quantity})) 
       },
        clear:function(){
            self.productList.length = 0;
        },
        delete(id:number){
            if (self.productList.findIndex((el)=>id===el.id) != -1){
              self.productList.splice(self.productList.findIndex((el)=>id===el.id),1);  
            }
        }
        
    }
})
.views(self=>{
    return {
        getAll:function(){
            return getSnapshot(self);
        }
    }
})


const ProductStore = types.model(
"mainStore",{
    typesOfProduct:types.optional(types.array(TypesOfProduct),[]),
    active:types.safeReference(TypesOfProduct),
    cart:types.optional(Cart,{})
 }
).actions(self=>{
    return {
    load:flow(function*(){
     const t = yield axios.get("http://localhost:3001/category");
     self.typesOfProduct = t.data;
        
    }),
    afterCreate:function(){
    this.load(); 
     }
}})
.views(self=>({
    getTypesOfProducts:function(){
        return getSnapshot(self.typesOfProduct);
    },
    getAllProducts:function(){
    return getSnapshot(self).typesOfProduct.map((el)=>{
           return el.productsList;
       })},
    getProducts:function(prod:number){
        return 
    }

    
}));

export {
    ProductStore,
    NameOfProduct,

}