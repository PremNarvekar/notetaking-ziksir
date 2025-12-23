require("dotenv").config()
const app = require("./src/app")
const conectToDB = require("./src/db/db")
conectToDB()



app.listen(3000 , ()=>{
    console.log("Servre runing port 3000")
})