const userModel = require("../model/auth.model")
const jwt  = require("jsonwebtoken")


async function notemi(req, res , next){

    const { token } = req.cookies

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        
        })
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decode.id)

        req.user = user

        next()
    }

    catch(err){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
}

module.exports = {
    notemi
}