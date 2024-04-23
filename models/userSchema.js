
// user schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 16,
    },
    lastName: String,
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      validate: {
        validator: function (v) {
          return /^(?:\+?91|0)?(?:[0-9]\d{9})$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Indian mobile number!`,
      },
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        validator: function(v) {
          // Regular expression to validate email format
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      maxlength: 16, 
      validate: {
        validator: function(v) {
          // Regular expression to validate password format
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-zA-Z0-9@#$%^&+=]).{6,16}$/.test(v);
        },
        message: props => `${props.value} is not a valid password! It must contain at least one uppercase letter, one lowercase letter, one special character, one digit, and be between 6 to 16 characters long.`
      }
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);