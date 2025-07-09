import User from "../models/User.js";
import { hashPassword } from "../utils/utility.js";

const adminSeeders=async()=>{

    const adminFound = await User.findOne({email:"admin@gmail.com"});
       
        if(!adminFound){
            const password = hashPassword('admin')
            // console.log("i am viewing admin")
            await User.create({
                userName : "admin",
                password ,
                email : "admin@gmail.com",
                phone : 9810594474,
                role : "ADMIN"
            })
            console.log("admin seeded successfully")
        } else{
            console.log("Admin already exist")
        }

}

export {adminSeeders}