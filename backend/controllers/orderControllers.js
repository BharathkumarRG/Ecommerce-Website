const orderModel = require('../models/orderModel');


// exports.createOrder = async (req, res, next) => {
//     console.log("The body data: ", req.body)
//     try {
//         await orderModel.create(req.body)
//         res.status(200).json({
//             success: true,
//             message: 'Order created Succesfully',
//         })
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Order Creation failed',
//             error: error.message
//         })
        
//     }
//     res.json({
//         success: true,
//         message: " Order Works"
//     })
// }

exports.createOrder = async (req, res, next) => {
    console.log("The body data: ", req.body)
    try {
        const cartItems = req.body;
        const amount = Number(cartItems.reduce((acc, item) => {
            total= acc + item.product.price * item.qty
            return total;
        },0)).toFixed(2);
        const status = 'pending';
        await orderModel.create({ cartItems, amount, status })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Order Creation failed',
            error: error.message
        })
        
    }
    res.json({
        success: true,
        message: " Order Works"
    })
}