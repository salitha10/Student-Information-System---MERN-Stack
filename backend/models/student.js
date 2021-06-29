const mongoose =  require('mongoose');

const schema = mongoose.Schema;

//Schema
const  studentSchema = new schema ({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    }
});

//Model
const student = mongoose.model('students', studentSchema);

//Export module
module.exports = student;