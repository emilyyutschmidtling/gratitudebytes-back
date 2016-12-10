var mongoose = require('mongoose');

// use mongodb://localhost if the env variable doesn't exist
var dbUri = process.env.MONGODB_URI || 'mongodb://localhost/' + process.env.LOCAL_DB;

// checks that mongod is running
if(!process.env.MONGODB_URI) {
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log('YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!');
    process.exit(0);
  });
}

mongoose.connect(dbUri);

module.exports = mongoose;
