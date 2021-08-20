const {Device} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {
    async create(req,res, next){
        try{
        const {name, price, brandId, typeId, info} = req.body;
        const {img} = req.files;
        let fileName = uuid.v4()+'.jpg';
        img.mv(path.resolve(__dirname,'..','static', fileName));
        const device = await Device.create({name, price, brandId, typeId, img:fileName});
        return res.json(device);
        }
        catch(e){
          next(ApiError.badRequest(e.message));  
        }
    }
    
    async getAll(req,res){
        const {brandId, typeId} = req.query;
        let devices;
        
        try{
        
        if (!brandId && !typeId){
          devices = await Device.findAll();
            
        }
        
        if (brandId && !typeId){
            devices = await Device.findAll({where:{brandId}});
            
        }
        
        if (!brandId && typeId){
            devices = await Device.findAll({where:{typeId}});
    
        }
        
        if (brandId && typeId){
          devices = await Device.findAll({where:{brandId, typeId}});  
            
        }
        
        return res.json(devices);
        }
        
        catch(e){
            console.log(e.message);
        }
    }
    
    async getOne(rea,req){
        
        
    }
    
}

module.exports = new DeviceController();