const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();


const password = process.env.password
const name = process.env.name


const User = require('./models/FORM.js');
const mongoURL = `mongodb+srv://${name}:${password}@cluster0.ipo5a6z.mongodb.net/Form`
console.log(mongoURL)

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
  try {
    let users = await User.find()
    res.render('newStudent', { users })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error from /')
  }
})

app.get('/editPage/:id', async (req, res) => {
  try {
    let userID = req.params.id
    let user = await User.findById(userID)
    res.render('editPage', { user })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error from /editPage/:id')
  }
})

app.get('/viewUser/:id', async (req, res) => {
  try {
    let userID = req.params.id
    let user = await User.findById(userID)
    res.render('viewUser', { user })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error from /viewUser/:id')
  }
})

app.post('/updateUser/:id', async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error from /updateUser/:id')
  }
})

app.get('/delete/:id', async (req, res) => {
  try {
    let userID = req.params.id
    await User.findByIdAndDelete(userID)
    res.redirect('/')
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error from /delete/:id')
  }
})

app.post('/formInput', async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error from /formInput')
  }
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})
