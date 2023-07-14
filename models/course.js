const mongoose = require("mongoose");

const course = mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    content:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }

},

{
    timestamps:true
}

)

const product = mongoose.model("courses",course);
module.exports = product;