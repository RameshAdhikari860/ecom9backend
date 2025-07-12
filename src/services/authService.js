import bcrypt from 'bcrypt'
import User from '../models/User.js'
import { hashPassword } from '../utils/utility.js'
import { generateOtp } from '../utils/generateOtp.js'
import { sendMail } from '../utils/sendMail.js'



const register  = async (data)=>{

   const hashedPassword = hashPassword(data.password)
//   const has = '$2b$10$0tStlNyvwbc.443tD1ZnK.1W/HVrG1JgyQ6UY4cZ0WBpjzCjyVSJG'
   
  const email  = data.email

   const userExist = await User.find({email})
  
   
   if(userExist.length > 0 ){
       throw  new Error('user aleready exist ')
   }

   return await User.create({
    email : email,
    password : hashedPassword,
    userName : data.userName ,
    phone : data.phone
   })

}


const login  =async (data)=>{

    const doEmailExist = await  User.find({email:data.email})

   //  [{emai:"efafa@gmail.com",password:"adfaf232"}]


   console.log("email dont exist")
    if(!doEmailExist.length > 0){
       throw new Error("Invalid user")
      
      }
      console.log(doEmailExist)
    const  dbPassword = doEmailExist[0].password

    const isPasswordMatched = bcrypt.compareSync(data.password,dbPassword)

    if(isPasswordMatched){
      return doEmailExist[0];
    }else{
      throw new Error("Invalid login")
    }

}



const forgotPassword = async(data)=>{

  const userRegistered =  await User.findOne({email:data.email})

  if(!userRegistered){throw new Error("Invalid Request")}

  const otp = generateOtp()
  
  sendMail(data.email,otp)

  return 

}


   
export default {register,login,forgotPassword}