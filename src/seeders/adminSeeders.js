import User from "../models/User.js";

const adminSeeders=async()=>{

    const adminFound = await User.findOne({email:"admin@gmail.com"});

        if(!adminFound){
            // console.log("i am viewing admin")
            await User.create({
                userName : "admin",
                password : "admin",
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