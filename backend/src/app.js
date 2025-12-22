const express = require("express")
const cookie = require("cookie-parser")
const app = express()


const noteRoute = require("./routes/note.routes")
const authRoute = require("./routes/auth.routes")


app.use(express.json())
app.use(cookie())


app.use("/api/auth" , authRoute)
app.use("/note" ,noteRoute )


module.exports = app