const { strict } = require('assert')
const mongoose = require('mongoose')
const Schema = mongoose.Schema



const adminSchema= new Schema({
    email:{
        type:String
    },
    password:{
        typr:String
    },
    organization:{
        type: String
    }
},{timestamps:true})
const Admin = mongoose.model('Admin',adminSchema)
module.exports= Admin