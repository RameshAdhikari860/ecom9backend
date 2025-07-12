import express from 'express'
import { createProduct, deleteProductById, getAllProduct, getProductById, updateProduct } from '../controllers/productController.js'
import { isLoggedIn } from '../middleware/isLoggedIn.js'
import { isAdmin } from '../middleware/isAdmin.js'

const router = express.Router()

router.post('/createProduct',isLoggedIn,isAdmin, createProduct)
router.get('/getAllProduct', getAllProduct)
router.get('/getProductById/:id', getProductById)
router.delete('/deleteProductById/:id',isLoggedIn,isAdmin, deleteProductById)
router.put('/updateProduct/:id',isLoggedIn,isAdmin, updateProduct)


export default router