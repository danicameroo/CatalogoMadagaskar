const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema(
    {
        title:{type: String , required:true },
        subtitle:{type: String , required:true },
        desc:{type: String , required:true },
        img:{type:String , required:true },
        categories:{ type:Array },
        size:{type: Array },
        colorFlavor:{type: Array },
        stock:{type: Number, required:true },
        price:{type:Number , required:true },
        inStock:{type:Boolean, default:true}
    },
    {timestamps: true }
);

module.exports = mongoose.model("Product", productsSchema);