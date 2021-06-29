const router = require('express').Router();
const { Router } = require('express');
let student = require("../models/student.js");


/**
 * 
 * Routes for CRUD
 * 
**/

//ADD
router.route("/add").post((req, res)=>{

    //Get data
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;

    //Add data to model
    const newStudent = new student({
        name,
        age,
        gender,
        address
    });

    //Save to database
    newStudent.save().then(()=>{
        res.json("Student Added");
    }).catch((err)=>{
        console.log(`Error: ${err}`);
    }) 

});


//View
router.route("/").get((req, res)=>{

    //Get all student data from databse
    student.find().then((data)=>{

        //Send data as json
        res.json(data);

    }).catch((err)=>{
        console.log(`Error: ${err}`);
    })
});


//Update
router.route("/update/:id").put(async (req, res)=>{

    //Get student ID
    let id = req.params.id;

    /**
     * 
     * Destructure
     * 
    **/

    //Get data
    const { name, age, gender, address } = req.body;

    //Update
    const updateStudent = {
        name,
        age,
        gender,
        address
    }

    await student.findByIdAndUpdate(id, updateStudent).then((data) => {
        //Response
        res.status(200).send({status: "Student Updated", user: data})
    }).catch((err) => {
        console.log(`Error: ${err}`);
        res.status(500).send({status: "Update error"});
    });


});

//Delete
router.route("/delete/:id").delete(async (req, res) => {

    //Get ID
    let id = req.params.id;

    await student.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Student deleted"});
    }).catch(err => {
        console.log(`Error: ${err}`);
        res.status(500).send({status: "Delete error"});
    });

});


//Get only one student data
router.route("/get/:id").get(async (req, res) => {

    //Get ID
    let id = req.params.id;

    //Get data from database
    await student.findById(id).then((data) =>{
        res.status(200).send({user:data})
    }).catch((err) =>{
        console.log(`Error: ${err}`);
        res.status(500).send({status: "Error getting data"});
    });

});


module.exports = router;