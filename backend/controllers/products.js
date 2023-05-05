import { product } from "../models/product.js"
export const getAllProducts=async (req,res)=>{
    console.log("getAllProduct called...")
    try {
        const myData = await product.find({})
        if (!myData) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.send(myData)
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getProductByID = async (req,res)=>{
    const {productid} = req.params;
    try {
        const myData = await product.findOne({productid})
        if (!myData) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.send(myData)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createProduct = async(req,res) => {
    console.log("create product called...")
    console.log(req.body)
    try {
        const { productid, productname, modelyear, price, description } = req.body;
        const newProduct = new product({ productid, productname, modelyear, price, description });
        await newProduct.save()
        res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export const updateProduct = async(req,res) => {
    console.log(req.body)
    try {
        const {productid} = req.params;
        const updateProductDetails = await product.findOneAndUpdate(
            {productid},
            {$set:req.body},
            {new:true}
        )
        res.status(200).json({success:true,product:updateProductDetails})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export const deleteProductByID = async(req,res) => {
    try {
        const {productid} = req.params;
        const deletedProduct = await product.findOneAndDelete({productid})
        if (!deletedProduct) {
            // Return error if product with given ID not found
            return res.status(404).json({ message: 'Product not found' });
        }
        // Return success message and deleted product data
        res.status(200).send({message:"Product deleted succesfully",status:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export const findProductByPriceRange = async(req,res) => {
    console.log("findProductByPriceRange called...")
    try {
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const products = await product.find({ price: { $gte: minPrice, $lte: maxPrice } });
        console.log(minPrice)
        console.log(maxPrice)
        console.log(products)
        res.send(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}