const router = require('express').Router()
const studentsRoute = require('./students')
const mentorsRoute = require('./mentors')

router.use('/students', studentsRoute)
router.use('/mentors', mentorsRoute)

module.exports = router