import {types} from "mobx-state-tree";

const TypesOfProduct = types.model(
"typesOfProduct",
    {
        id:types.optional(types.number,0),
        name:types.optional(types.string,'')
    }
);

const NameOfProduct = types.model(
"NameOfProduct",
    {
    id:types.optional(types.number,0),
    name:types.optional(types.string,''),
    price:types.optional(types.number,0),
    rate:types.optional(types.number,0),
    img:types.optional(types.array(types.string),[])
})
;

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
    typesOfProduct:types.optional(types.array(TypesOfProduct),[
        {id:1, name:"Орехи"},
        {id:2, name:"Наборы"},
        {id:3, name:"Сухофрукты"},
        {id:4, name:"Специи"},
        {id:5, name:"цукаты"},
        {id:6, name:"Сладости"},
        
    ]),
    namesOfProduct:types.optional(types.array(NameOfProduct),[
        {id:1, name:"Грецкий орех", price:100, rate:3,img:["http://lorempixel.com/50/50/sports"]},
        {id:2, name:"Фисташки жаренные и соленые Экстра", price:230, rate:5,img:["http://lorempixel.com/50/50/sports"]},
        {id:3, name:"Миндаль жаренный", price:432, rate:4,img:["http://lorempixel.com/50/50/sports"]},
        {id:4, name:"Фруктово-ореховая смесь жаренная", price:432, rate:3,img:["http://lorempixel.com/50/50/sports"]},
        {id:5, name:"Миндаль жаренный", price:123, rate:1,img:["http://lorempixel.com/50/50/sports"]},
        {id:6, name:"Кешью жаренный", price:123, rate:2,img:["http://lorempixel.com/50/50/sports"]},
    ])
 }
);

export {
    ProductStore,
}