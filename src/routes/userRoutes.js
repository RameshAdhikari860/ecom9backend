
import express from 'express';
import { createUser } from '../controllers/userController.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { isAdmin } from '../middleware/isAdmin.js';

const router =  express.Router()

 
router.get('/',isLoggedIn,isAdmin,(req,res)=>{
    const user = req.user
    console.log("i am decodedfrom route ",user)
    res.send('route page')
})


router.post('/createUser',createUser)




export default router;