const mongoose = require("mongoose"),
      Schema = mongoose.Schema,
      bcrypt = require(bcrypt);
      SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  username: { 
    type: String, 
    required: true, 
    index: { unique: true } 
  },
  password: { 
    type: String, 
    required: true 
  },
});

userSchema.pre('save', ()=> {
  const user = this;
  //only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
   // generate a salt
   bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
     if (err) return next(err);

     // override the cleartext password with the hashed one
     user.password = hash;
     next();
   });
});

userSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}

module.exports = mongoose.model(User, userSchema);