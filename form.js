const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

const User = require('./models/FORM.js');
const mongoURL = 'mongodb+srv://ndross427:9205DRIVE777@cluster0.ipo5a6z.mongodb.net/Form'

mongoose.connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch( err => {
    console.error(err)
  })

const port = process.env.PORT || 3000

// Set the views for Express
app.set('view engine', 'ejs')
app.set('./views', 'views')

app.use(express.static('public'))

// Parse the body text as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
  let users = await User.find()
  res.render('newStudent', { users })
})

app.get('/editPage/:id', async (req, res) => {
  let userID = req.params.id
  let user = await User.findById(userID)
  res.render('editPage', { user })
})

app.get('/viewUser/:id', async (req, res) => {
  let userID = req.params.id
  let user = await User.findById(userID)
  res.render('viewUser', { user })
})

app.post('/updateUser/:id', async (req, res) => {
  let body = req.body
  let updatedData = {
    fName: body.fName,
    lName: body.lName,
    email: body.email,
    phone: body.phone,
    address: body.address
  }
  let userID = req.params.id
  await User.findByIdAndUpdate(userID, updatedData)
  res.redirect('/')
})

app.get('/delete/:id', async (req, res) => {
  let userID = req.params.id
  await User.findByIdAndDelete(userID)
  res.redirect('/')
})

app.post('/formInput', async (req, res) => {
  let body = req.body
  this.formData = {
    fName: body.fName,
    lName: body.lName,
    email: body.email,
    phone: body.phone,
    address: body.address
  }

  let newUser = new User(this.formData)
  await newUser.save()
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})