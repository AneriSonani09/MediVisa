const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi'); 
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
    return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        userName: Joi.string().required().label("User Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data);
};

module.exports = {User, validate};
