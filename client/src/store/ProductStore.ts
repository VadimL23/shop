import {types, getSnapshot, flow, Instance, getType, getParent} from "mobx-state-tree";
import {useApi} from "hooks";
import axios from "axios";

const MainSlider = types.model("MainSlider",{
     id:types.optional(types.number,0),   
     img:types.optional(types.string,""),
     title:types.optional(types.string,""),
     subtitle:types.optional(types.string,""),
     background:types.optional(types.string,""),
     color:types.optional(types.string,"")
})

export enum Weight {
      Primary = "300 г",
      Secondary = "500 г",
      Tertiary = "1 кг"
     }

const NameOfProduct = types.model(
"NameOfProduct",
    {
    id:types.optional(types.number,0),
    name:types.optional(types.string,''),
    price:types.optional(types.number,0),
    rate:types.optional(types.number,0),
    description:types.optional(types.string,""),
    img:types.optional(types.array(types.string),[]),
    weight:types.optional(types.enumeration<Weight>("Weight",Object.values(Weight)),Weight.Primary),
    quantity:types.optional(types.number,0)
})
.views(self=>({
    getSumm:function(){
            const arr = getSnapshot(self);
            let summ:number = 0;    
            switch(self.weight)
                  {
                    case(Weight.Primary):
                    summ = 3 * self.quantity * self.price;
                    break; 
                  
                    case(Weight.Secondary):
                    summ = 5 * self.quantity * self.price;
                    break;
                
                    case(Weight.Tertiary):
                    summ = 10 * self.quantity * self.price;
                    break;
                }
            return summ;
            }
        
             
    }
));        
        
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



export interface ICart  {
  id:number, 
  name:string, 
  price:number , 
  rate:number , 
  img:string[] , 
  quantity:number | undefined ,
  weight:string 
}

const Cart = types.model(
    "Cart",
    {
     productList:types.optional(types.array(NameOfProduct),[])   
    })
.actions(self=>{
    return{
        add:function<ICart>(product:ICart)
        {
            
          self.productList.push(NameOfProduct.create({...product})) 
       
    },
        clear:function(){
              self.productList.length = 0;
        },
        delete(id:number){
              if (self.productList.findIndex((el)=>id===el.id) != -1){
              self.productList.splice(self.productList.findIndex((el)=>id===el.id),1);  
            }
        },
        getSumm:function(){
            const arr = getSnapshot(self.productList);
            let summ:number = 0;    
            if (arr.length !== 0) {
           arr.forEach(el=>{
             self.productList.map((el)=>{summ += el.getSumm()})
                })
            }
               return summ;
         },
        getQuantityAll:function(){
            const arr = getSnapshot(self.productList);
            let summ:number = 0;    
            if (arr.length !== 0) {
           arr.forEach(el=>{summ=summ+el.quantity})
            }
               
               return summ;
        },
        getQuantity:function(){
           const arr = getSnapshot(self.productList);
                if (arr.length !== 0) {
                let quantity:number = 0
               arr.forEach((el)=>{quantity+=el.quantity})
           return quantity; 
        }
        },
        get(id:number){
                return self.productList.find((el)=>el.id==id);
            },
        getSummById:function(id:number){
            const arr = getSnapshot(self.productList);
            let summ:number = 0;    
            if (arr.length !== 0) {
               const member = arr.find((el)=>el.id==id);
                if (member){
                    console.log(`MEMBER WEIGHT `, member.weight);
                    
                  switch(member.weight)
                  {
                    case(Weight.Primary):
                    summ = 3 * member.quantity * member.price;
                    break; 
                  
                    case(Weight.Secondary):
                    summ = 5 * member.quantity * member.price;
                    break;
                
                    case(Weight.Tertiary):
                    summ = 10 * member.quantity * member.price;
                    break;
                }
            }
            return summ;
            }
        },
        setQuantity(id:number,quantity:(number | undefined)){
              const member = self.productList.find((el)=>el.id==id)
            if (member){ 
          //  member.quantity = quantity;
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
    cart:types.optional(Cart,{}),
    mainSlider:types.optional(types.array(MainSlider),[])
 }
).actions(self=>{
    return {
    load:flow(function*(){
     self.typesOfProduct = yield axios.get("http://localhost:3001/category").then((resp)=>resp.data); 
     self.mainSlider= yield axios.get("http://localhost:3001/mainSlider").then((resp)=>resp.data);   

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
    getProductById:function(id:number){
                
//        return self.getAllProducts().find((el)=>el.id == id);
//        const result = self.typesOfProduct?.find((el)=>el.productsList.find((product)=>
//            product.id == id
//            ))
//        if (typeof result !== "undefined") {return getSnapshot(result)}
      }

    
}));

export {
    ProductStore,
    NameOfProduct,

}