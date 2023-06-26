const mongoose = require("mongoose")

const MentorSchema = new mongoose.Schema({
    name: String,
    email: {
        required: true,
        unique: true,
        type: String
    },
    age: Number,
    contact_no: Number,
    department: String,
    experience: {
        type: Number,
        default: 0
    },
    students: [
        {
            type: mongoose.Types.ObjectId,
            ref: "students"
        }
    ],
}, { timestamps: true })

const Mentor = mongoose.model("mentors", MentorSchema)

module.exports = Mentor