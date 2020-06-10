const Order = require("../models/order");



exports.createOrder = (req, res) => {
    const order = new Order(req.body);
    order.save((err,order) => {
        if(err){
            return res.status(400).json({
                error : "Failed to Order !"
            })
        }
        return res.json(order);
    })
}

exports.getAllOrder = (req,res) => {
    Order.find()
    .populate("products")
    .exec((err, orders) => {
        if(err)
        {
            return res.status(400).json({
                error : "No Order at present !"
            })
        }
        return res.json(orders);
    })
}