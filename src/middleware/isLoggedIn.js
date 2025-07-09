import jwt from 'jsonwebtoken'
import { verifyToken } from '../helpers/token.js'

const  isLoggedIn =  (req,res,next)=>{

    try {
        const token = req.cookies.authToken

        if(!token){ throw new Error("User Not Authenticated")}
        
       

        const decoded = verifyToken(token)
        console.log(decoded)

       
        req.user = decoded
        next();

   
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }

}


export {isLoggedIn}