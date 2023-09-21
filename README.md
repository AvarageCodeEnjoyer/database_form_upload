 ## Form

This is a simple Express.js application that allows users to input data into a form and view the data that has been inputted.

### Prerequisites

- Node.js installed on your computer
- MongoDB installed and running
- A text editor or IDE such as Visual Studio Code

### Usage

To use the application, open your web browser and go to `https://database-form-upload.onrender.com`. You will see a form that you can use to input data. Once you have inputted the data, click the "Submit" button. The data will be saved to the database and you will be redirected to a page that shows all of the data that has been inputted.

### Code Explanation

The code for this application is relatively simple. Let's go through it step by step.

First, we import the necessary modules.

```
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();
```

Next, we connect to the MongoDB database.

```
const password = process.env.password
const name = process.env.name

const User = require('./models/FORM.js');
const mongoURL = `mongodb+srv://${name}:${password}@cluster0.ipo5a6z.mongodb.net/Form`

mongoose.connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch( err => {
    console.error(err)
  })
```

Next, we set the port that the application will run on.

```
const port = process.env.PORT || 3000
```

Next, we set the views for Express.

```
// Set the views for Express
app.set('view engine', 'ejs')
app.set('./views', 'views')
```

Next, we serve static files.

```
app.use(express.static('public'))
```