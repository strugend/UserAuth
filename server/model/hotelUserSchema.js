const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const hotelUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    default: "hotel_rental",
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

hotelUserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    // this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
  }
  next();
});

//generating user token
hotelUserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

//get resetpassword token
hotelUserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
};
// collection creation
const Hoteluser = mongoose.model("HOTEL", hotelUserSchema);

module.exports = Hoteluser;
