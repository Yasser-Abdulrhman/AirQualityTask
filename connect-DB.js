const mongoose = require("mongoose")
const {startCronJob} = require('./cron_jobs/logging-air-quality')



function connectDB () {
  mongoose.connect(process.env.MONGODB_URL);
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
  // start cron job of logging air quality after connectoin mongo db
  startCronJob(); 

}


module.exports = connectDB; 
  
