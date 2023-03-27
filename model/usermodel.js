const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  age: { type: Number, required: true },
  is_married :{type:Boolean , required: true}
});


const UserModel = mongoose.model("user", userschema);
module.exports = {
  UserModel
};


// const userschema = mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   gender: { type: String, required: true },
//   password: { type: String, required: true },
//   city: { type: String, required: true },
//   age: { type: Number, required: true }
// });


// name:  String,
// email:  String,
// gender:String, 
// password:String,
// city: String, 
// age:  Number
// });
