//Connect to Mongo database use tempDB as database name 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// production or local instance of mongoose using promise at global level
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tempDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(

    () => {
      console.log('CONNECTED TO MONGO');
    },
    (err) => {
      console.log('ERROR CONNECTING TO MONGO:', err);
    }
  );

module.exports = mongoose.connection;
