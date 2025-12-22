const noteModel = require("../model/note.model")


async function note(req , res){
    const { title , description } = req.body

    if(!title || !description){
        return res.status(400).json({
            message:"Missing title or Description"
        })
    }

    if(!req.user){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    const note = await noteModel.create({
        user : req.user._id,
        title, 
        description
         
    })

    return res.status(200).json({
        message:"Note Created Succefully",
        note:{
            _id:note._id,
            title:note.title,
            description:note.description

        }
    })

   
}

async function getNote(req ,res){
   
    if(!req.user){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    const notes = await noteModel.find({
        user: req.user._id,

    }).sort({createdAt: -1})

    return res.status(200).json({
        notes,
    })
}

async function deleteNote (req, res){
    const { id } = req.params;

    if(!req.user){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    const note = await noteModel.findOne({
        _id: id,
        user: req.user._id,
    })

    if(!note){
        return rea.status(404).json({
            message:"Note not found"
        })
    }

    await note.deleteOne();

    return res.status(200).json({
        message:"Note deleted successfully"
    })
}



module.exports = {
    note,
    getNote,
    deleteNote
}