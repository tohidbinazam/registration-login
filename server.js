const dotenv = require('dotenv')
const express = require('express');
const app = express();
const colors = require('colors')
const { authCheck } = require('./middleware/authMiddleware')
const connectMongoDB = require('./config/db')

// Dotenv init
dotenv.config()

// MongoDB connections init
connectMongoDB()


// environment variable init
let server_name = process.env.APP_NAME
let port = process.env.SERVER_PORT

// Use global middleware
// app.use(authCheck)

// Request body init
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// Middleware example
app.get('/tohid', authCheck, (req, res) => { 
    console.log('tohid router done');
    res.send('OK')
})

// Student route use
app.use('/api/students', require('./routes/studentRoute'))

// Admin route use
app.use('/api/admins', require('./routes/adminRoute'))

// Express server listener with port
app.listen(port, () => {
    console.log(`Our ${server_name} server is running on port ${port}`);
})