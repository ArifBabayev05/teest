const mongoose = require('mongoose');

const TaskScheme = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    createAt:{
        type:Date,
        default:Date.now
    }

})

// DB Table configs
module.exports = mongoose.model("TaskScheme", TaskScheme)