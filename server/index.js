require('dotenv').config();

const express = require("express");
const sequelize = require("./db.js");
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',router);


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

