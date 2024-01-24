const mongoose=require('mongoose');
const uschema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    age:Number
})
module.exports = mongoose.model('user', uschema);