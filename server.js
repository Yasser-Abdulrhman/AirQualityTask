require('dotenv').config();
const PORT = process.env.APP_PORT ?? 3000;
const connectDB = require("./connect-DB")
const app = require('./app')

connectDB();


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
});


module.exports = app
