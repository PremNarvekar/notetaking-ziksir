const userModel = require("../model/auth.model")
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")


async function registerUser(req, res) {
    const { name, email, password } = req.body

    if (!email) {
        return res.status(400).json({
            message: "Email is required"
        })
    }


    const userAlredyExits = await userModel.findOne({
        email

    })
    if (userAlredyExits) {
        return res.status(400).json({
            message: "User already Exist"
        })
    }

    const hashpasword = await bcyrpt.hash(password, 10)

    const user = await userModel.create({
        name,
        email,
        password: hashpasword
    })

    const token = jwt.sign({
        id: user.id
    }, process.env.JWT_SECRET)


    res.cookie("token", token)

    res.status(200).json({
        message: " User Created Succefully",
        user: {
            _id: user.id,
            name: user.name,
            email: user.email

        }

    })
}


async function login(req, res) {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required",
        });
    }


    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "User not found",
        });
    }


    const isPasswordMatch = await bcryptjs.compare(password, user.password);

    if (!isPasswordMatch) {
        return res.status(401).json({
            message: "Invalid password",
        });
    }


    return res.status(200).json({
        message: "User login successfully",
        user: {
            id: user._id,
            email: user.email,
        },
    });
}


async function logoutUser(req, res){
    res.clearCookie("token")
    res.status(200).json({
        message:"Logout Succesfully"
    })

}


module.exports = {
    registerUser,
    login,
    logoutUser

}
