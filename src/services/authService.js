import bcrypt from 'bcrypt'
import User from '../models/User.js'



const register  = async (data)=>{

   const hashedPassword = bcrypt.hashSync(data.password,10)
//   const has = '$2b$10$0tStlNyvwbc.443tD1ZnK.1W/HVrG1JgyQ6UY4cZ0WBpjzCjyVSJG'
   
  const email  = data.email

   const userExist = await User.find({email})
   console.log(userExist)
   
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

export default {register}