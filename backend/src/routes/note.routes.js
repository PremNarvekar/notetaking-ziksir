const express = require("express")
const router = express.Router()


const noteauth = require("../midllerwares/note.midllerware")
const note = require("../controller/note.controller")



router.post("/create" ,  noteauth.notemi , note.note)
router.get("/getall" , noteauth.notemi , note.getNote )
router.delete("/delete/:id" , noteauth.notemi , note.deleteNote)



module.exports = router