const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DB_CONNECT,
  { useUnifiedTopology: true,useNewUrlParser: true },
  () => {
    console.log('connect to db!')
  }
)

// Import Routes
const authRoute = require('./routes/auth')

// Route Middleware
// 相当于后面的请求都带此前缀，类似于baseURL
app.use('/api/user', authRoute)

// Middleware
app.use(express.json())

app.listen(3000,() => console.log('Server Up and running!'))