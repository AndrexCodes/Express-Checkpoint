const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    let users = {
        name: "Andrew"
    }
    res.send(users)
})

router.get("/new", (req, res)=>{
    let users = {
        name: "Andrew Form Details"
    }
    res.send(users)
})

router.get("/posts", (req, res)=>{
    let users = {
        name: "Andrew Form Details"
    }
    res.json(users)
})

module.exports = router