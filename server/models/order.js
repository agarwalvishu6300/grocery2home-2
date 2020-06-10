const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const orderSchema = new mongoose.Schema(
{
    name : {
        type : String,
        trim : true,
        maxlength : 50,
        required : true
    },
    address : {
        type : String,
        trim : true,
        maxlength : 250,
        required : true
    },
    contact : { 
        type : Number,
        trim : true,
        maxlength : 10,
        required : true
    },
    totalprice : { 
        type : Number,
        trim : true,
        maxlength : 5,
    },
    products : [
        {type: ObjectId,
        ref: "Product"}]

},
    {
        timestamps : true
    }

);


module.exports = mongoose.model("Order" , orderSchema);