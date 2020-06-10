const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


exports.createProduct = (req,res) => {

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req , (err,fields , file) => {
    if(err)
    {
        return res.status(400).json({
            error : "Problem with Image"
        })
    }

  const {name , quantity, size , description , price, category } = fields;

    if(!name || !quantity || !size || !description || !price) 
    {
      return res.status(400).json({
        error : "Please include all fields !"
      })
    }

    let product = new Product(fields);

    if(file.photo){
      if(file.photo.size > 3000000)
      {
        return res.status(400).json({
          error: "Photo size is too big !"
        })
      }

      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    product.save((err, product)=> {
      if(err)
      {
        return res.status(400).json({
          error: "Error in creating the Product!"
        })
      }
      return res.json(product);
    })
  })
} 

exports.getAllProduct = (req,res) => {

    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";


    Product.find()
    //.select("-photo")
    .populate("category")
    //.sortby([[sortBy,"asc"]])
    .exec((err, products) => {
        if(err)
        {
            return res.status(400).json({
                error : "No Product exist !"
            })
        }
        return res.json(products);
    })
}


//middleware
exports.photo = (req, res, next) => {
    if (req.product.photo.data) {
      res.set("Content-Type", req.product.photo.contentType);
      return res.send(req.product.photo.data);
    }
    next();
  };
  

exports.getProductByCategory = (req, res) => {

    const sortBy = req.query.sortBy ? req.query.sortBy : "_id";

    Product.find({category : req.category})
    .select("-photo")
    .sortby([[sortBy, " asc"]])
    .exec((err, products) => {
        if(err)
        {
            return res.status(400).json({
                error : "No Product exist !"
            })
        }
        return res.json(products);
    })
}