const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//static sighnup method
userSchema.statics.signup = async function(email, password) {

    //validator
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw new Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong enough');
    }

    const user = await this.findOne({email});
    if (user) {
        throw new Error('User already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await this.create({email, password: hash});
    return newUser;
}

// static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }
    const user = await this.findOne({email});
    if (!user) {
        throw new Error('Incorrect email');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error('Incorrect password');
    }
    return user;
}

module.exports = mongoose.model('User', userSchema);