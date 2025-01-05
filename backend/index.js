const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();
require('./Models/db')
const PORT = process.env.PORT || 3002 ;
const AuthRouter = require('./Routes/AuthRouter')

app.get('/ping', (req,res)=> {
    res.send('Ahmad Ammad')
})

app.use(bodyParser.json());
app.use(cors())

app.use('/auth', AuthRouter)
app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`)
})