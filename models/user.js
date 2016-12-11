var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({

  local: {
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String
  }

});

// methods

// encrypts/hashes the password
UserSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checks to see if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the User constructor
var User = mongoose.model('User', UserSchema);

// make User constructor available everywhere in the app
module.exports = User;
