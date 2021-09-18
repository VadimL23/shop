import {types, getSnapshot} from "mobx-state-tree";
import {NameOfProduct} from "./models/NameOfProduct";
import {Weight} from "./models/NameOfProduct";

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
        },
        getCount:function(){
            return self.productList?.length;
        }
    }
})
            
export interface ICart  {
  id:number, 
  name:string, 
  price:number , 
  rate:number , 
  img:string[] , 
  quantity:number | undefined ,
  weight:string 
}
   
export {
  Cart
}

        
