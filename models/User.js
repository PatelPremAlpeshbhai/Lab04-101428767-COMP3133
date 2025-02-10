const mongoose = require("mongoose");

// Custom Validation for Phone and Zip Code
const phoneRegex = /^1-\d{3}-\d{3}-\d{4}$/;
const zipRegex = /^\d{5}-\d{4}$/;
const urlRegex = /^(https?:\/\/)[\w.-]+(\.[\w.-]+)+[/#?]?.*$/;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { 
      type: String, 
      required: true, 
      match: /^[a-zA-Z\s]+$/ // Only alphabets and spaces allowed
    },
    zipcode: { 
      type: String, 
      required: true, 
      match: zipRegex // Valid format DDDDD-DDDD
    }
  },
  phone: { 
    type: String, 
    required: true, 
    match: phoneRegex // Format 1-DDD-DDD-DDDD
  },
  website: { 
    type: String, 
    required: true, 
    match: urlRegex // Valid http or https URLs
  },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
  }
});

module.exports = mongoose.model("User", UserSchema);
