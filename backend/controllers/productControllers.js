const productModel = require('../models/productModel')


exports.getProducts = async (req, res , next) => {

    const Products = await productModel.find({});
    res.json({
        success: true,
        Products
    })
}

exports.getSingleProduct = async (req, res, next ) => {
    try {
        const id = req.params.id
        const Products = await productModel.findById(id)
        res.json({
            success: true,
            data: Products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Invalid product ID or server error',
            error: error.message
        });
    }
}