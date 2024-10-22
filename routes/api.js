const express = require('express');
const Student = require('../models/student-model')
const routes = express.Router();


//get a list of students from the database
routes.get('/students', (req, res) => {
    res.send({ type: 'Get request' });
});

//add student to db
routes.post('/addstudent', async (req, res, next) => {

    try {
        const student = new Student(req.body)
        const result = await student.save();
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
})

//update students in the DB
routes.put('/students/:id', (req, res) => {
    res.send({ type: 'Update Request' });
});

//delete a student from the DB
route.delete('/:id', async(req, res )=>{
    const id =req.params.id
    try{
        const student = await Student.findByIdAndRemove(id)
        res.send(student)
    } catch (error)  {
        console.log(error.message)
    }
})

routes.patch('/:id' , async(req,res,next)=>{
    try{
        const id =req.params.id;
        const update=req.body;
        const options ={new:true}
        const result =await Student .findByIdAndUpdate(id, update,options)
        res.send(rasult); 
        } catch(error){
            console.log(error.message)
        }
})
module.exports = routes;

