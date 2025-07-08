import express from 'express'
import { createProduct, deleteProductById, getAllProduct, getProductById, updateProduct } from '../controllers/productController.js'

const router = express.Router()

router.post('/createProduct', createProduct)
router.get('/getAllProduct', getAllProduct)
router.get('/getProductById/:id', getProductById)
router.delete('/deleteProductById/:id', deleteProductById)
router.put('/updateProduct/:id', updateProduct)

export default router