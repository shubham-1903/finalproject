import express from "express";
import {getAllProducts, 
        getProductByID, 
        createProduct, 
        updateProduct, 
        deleteProductByID,
        findProductByPriceRange
    } from '../controllers/products.js'
const router = express.Router();

router.route("/range").get(findProductByPriceRange)
router.route("/").get(getAllProducts)
router.route("/:productid").get(getProductByID)
router.route("/").post(createProduct)
router.route("/:productid").put(updateProduct)
router.route("/:productid").delete(deleteProductByID)
export default router;