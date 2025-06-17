// // import { add } from './util/math.js';
// const math = require("./util/math");
// console.log(math.add(1, 2, 4));

// const {add} = require("./util/math");
// console.log(add(1, 2, 4));

//avilibale on node js not aviliable on browser
// const os = require('os')

// const path = require('path')

// const fs = require('fs')

// console.log(global)

// const { v4: uuidv4 } = require('uuid');
// console.log(uuidv4());

const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.json());

const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views'); //Tells Express where your .ejs (or other) templates live
app.use(express.urlencoded({ extended: true })); //Lets you access form data from req.body

app.get('/', (req, res) => {
res.render('index',{text :'world'})
})

const userRouter = require('./routes/user')

app.use('/users', userRouter)


// 6/17/class 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})