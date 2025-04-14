const express = require("express");
const cors = require("cors")
const index = require('./routes/index')

const app = express();
app.use(cors());
app.use(express.json()); 

app.get('/' , (req , res) => {
    res.send("Hello")
});
app.use('/api' , index)




module.exports = app



