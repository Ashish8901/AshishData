const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },

  phone: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  
  try {
    let token = jwt.sign({ _id: this._id }, SECRET_KEY="MYNAMEISASHISHPARMARANDTHISISMYMERNPROJECT" );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (e) {
    console.log(e);
  }
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
