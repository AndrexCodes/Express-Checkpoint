const express = require('express')
const calcRouter = express.Router()

calcRouter.get("/multiply/:num1/:num2", (req, res)=>{
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    let data = {
        answer: (num1 * num2),
        f_number: num1,
        s_number: num2
    }
    res.json(data)
})

module.exports = calcRouter