

const isAdmin = (req,res)=>{

    const user = req.user

    if(user.role == 'ADMIN'){}

}

export {isAdmin}