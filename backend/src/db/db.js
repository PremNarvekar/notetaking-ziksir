const mongoose = require("mongoose")



async function conectToDB(){
    mongoose.connect(process.env.MONGOOSE_KEY)
    .then(()=>{
        console.log("connect to Db")
    })

    .catch((err)=>{
        console.log("Somthing Wrong", err)
    })


    
}


module.exports = conectToDB