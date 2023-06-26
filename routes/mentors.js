const router = require("express").Router()

const { Mentor } = require('../models')

router.get("/", (req, res) => {
    res.send(`mentor route is working`)
})

router.post('/add', async (req, res) => {
    try {

        const user = new Mentor(req.body)
        const data = await user.save()
        return res.json(data)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/all', async (req, res) => {
    try {
        const users = await Mentor.find().populate("students", "name department contact_no")
        res.json(users)
    }
    catch (err) {
        res.send(err)
    }
})


router.get('/allStudents', async (req, res) => {
    try {
        const user = await Mentor.findById(req.body.mentor).populate("students")
        const results = user.students
        res.json(results)
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

module.exports = router