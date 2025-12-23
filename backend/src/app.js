const express = require("express")
const cookie = require("cookie-parser")
const app = express()
const cors = require("cors")


const noteRoute = require("./routes/note.routes")
const authRoute = require("./routes/auth.routes")


app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth" , authRoute)
app.use("/note" ,noteRoute )


module.exports = app