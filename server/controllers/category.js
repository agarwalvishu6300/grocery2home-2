const Category = require("../models/category");


exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err,category) => {
        if(err){
            return res.status(400).json({
                error : "Category is not Created !"
            })
        }
        return res.json(category);
    })
}


exports.getAllCategory = (req,res) => {
    Category.find().exec((err,categories) => {
        if(err)
        {
            return res.status(400).json({
                error : "No Categories found !"
            })
        }
        res.json(categories);
    });
};