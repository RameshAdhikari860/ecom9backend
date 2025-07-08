import userServices from "../services/userServices.js";


const createUser = async (req,res)=>{
    try{
        const {userName,password,phone,email, confirmPassword} = req.body
    
        if(!userName){
            return res.send("username required")
        } if(!password){
            return res.send("password required")
        } if(!email){
            return res.send("email required")
        }if(password !== confirmPassword){
            return res.send("password did not match")
        }
    
        const data =  await  userServices.createUser(req.body)
        
        res.send(data)
    }

    catch(error){
        console.log(error.message)
        res.status (400).json({
            message: "error occured",
            error: error.message
        })
    }

}


export { createUser };
