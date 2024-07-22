const express  = require("express")
const router = express.Router()

router.get("/list", (req, res)=>{
    let data = {
        name: "Andrew",
        age: 20
    }
    res.json(data)
})

module.exports = router