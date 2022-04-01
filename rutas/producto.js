const { Console } = require('console');
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema

const eschemaProducto = new eschema({
    nombre: String,
    Tipo : String,
    Precio: String,
    idProducto:String
})

router.post('/agregarproducto',(req,res)=>{
    const nuevoproducto = new ModeloProducto({
        nombre:req.body.nombre,
        Tipo: req.body.Tipo,
        Precio:req.body.Precio,
        idProducto: req.body.idProducto, 
    })
    nuevoproducto.save(function(err){
        if(!err){
            res.send('Nuevo Producto agregado')
        }else{
            res.send('ERROR')
        }
    })

})
//obtener todos los productos 
router.get('/obtenerproductos',(req, res)=>{
    ModeloProducto.find({},function(doc,err){
        if(!err){
            res.send(doc)
        }else{
            res.send(err)
        }
    })
})
//obtenerproducto

router.post('/obtenerdataproducto',(req, res)=>{
    ModeloProducto.find({idProducto:req.body.idProducto},function(doc,err){
        if(!err){
            res.send(doc)
        }else{
            res.send(err)
        }
    })
})
router.post('/actualizaproducto',(req,res)=>{
    ModeloProducto.findOneAndUpdate({idProducto: req.body.idProducto},{
        nombre:req.body.nombre,
        Tipo: req.body.Tipo,
        Precio: req.body.Precio
        
    },(err)=>{
        if(!err){
            
            res.send('Producto editado correctamente')
        }else{
            res.send(err)
        }
    })
    

})
router.post('/borrarproducto',(req,res)=>{
    ModeloProducto.findOneAndDelete({idProducto: req.body.idProducto}
        ,(err)=>{
        if(!err){   
            res.send('Producto borrado correctamente')
        }else{
            res.send(err)
        }
    })
    

})

const ModeloProducto = mongoose.model('producto',eschemaProducto)
module.exports = router;
