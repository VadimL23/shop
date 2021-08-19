require('dotenv').config();

const express = require("express");
const sequelize = require("./db.js");
const app = express();

const PORT = process.env.PORT || 5000;

console.log(sequelize);

const start = async () =>{
    
  try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=>console.log(`Server start at PORT ${PORT}`));
    }
    catch(e){
        console.log(e);
    }
    
}

start();

