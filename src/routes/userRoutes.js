
import express from 'express';
import { createUser } from '../controllers/userController.js';

const router =  express.Router()


router.get('/user',(req,res)=>{
    res.send('route page')
})


router.post('/createUser',createUser)




export default router;