const express = require('express');
const app = express();
const studentRoute= require('./api/Routes/student');
const facultyRoute= require('./api/Routes/faculty');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./api/Routes/user');

mongoose.connect('mongodb+srv://HarshitGupta:M04encTg2XESFXRM@nodejs.yiozcp3.mongodb.net/');

mongoose.connection.on('error',err=>{
    console.log('connection failed')
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database successfully')
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.use('/student', studentRoute)
app.use('/user',userRoute)
app.use('/faculty', facultyRoute)

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'app is running'
//     })
// })

app.use((req,res,nest)=>{
    res.status(404).json({
        error : 'bad request'
    })

})


module.exports = app;