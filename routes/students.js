const { Mentor, Student } = require("../models")

const router = require("express").Router()

router.get("/", (req, res) => {
    res.send(`students route is working`)
})

router.post('/add', async (req, res) => {
    try {
        const studentData = await Student.create(req.body)
        const mentorData = await Mentor.findByIdAndUpdate(req.body.mentor, {
            $push: { students: studentData._id },
        }, { new: true })

        res.json({ students: studentData, mentor: mentorData })
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

router.get('/all', async (req, res) => {
    const users = await Student.find().populate("mentor", "name department email contact_no")
    res.json(users)
})

router.put('/updateMentor/:studentId', async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.studentId, {
        mentor: req.body.mentor
    }, { new: true })
    const saveStudent = await Mentor.findByIdAndUpdate(req.body.mentor, {
        $push: { students: req.params.studentId }
    })
    const mentor = await Mentor.findByIdAndDelete(req.body.oldMentor)
    res.json({ user, mentor })
})








module.exports = router