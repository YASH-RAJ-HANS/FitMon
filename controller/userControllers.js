const asyncHandler = require('express-async-handler');
const User = require('../models/UserModel');
const generateToken = require('../utils/generateToken');

// register user controller
const registerUser = asyncHandler( async(req,res) => {
    const {name,email,password,mobileNumber,country,gender,age,weight,height,refferalCode,dateOfBirth} = req.body;

    // check if user already exists
    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const newUser = await User.create({
        name,email,password,mobileNumber,country,gender,age,weight,height,refferalCode,dateOfBirth
    });

    // if newUser created
    if(newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            gender: newUser.gender,
            mobileNumber: newUser.mobileNumber,
            country: newUser.country,
            age: newUser.age,
            weight: newUser.weight,
            height: newUser.height,
            refferalCode: newUser.refferalCode,
            dateOfBirth: newUser.dateOfBirth,
            token: generateToken(newUser._id)
        })
    } else{
        res.status(400)
        throw new Error("Error creating new user")
    }


    res.json({
        name,
        email,
        password,
        mobileNumber,
        country,
        gender,
        age,
        weight,
        height,
        refferalCode,
        dateOfBirth
    })
})


// login user controller
const loginUser = asyncHandler( async(req,res) => {
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            gender: user.gender,
            mobileNumber: user.mobileNumber,
            country: user.country,
            age: user.age,
            weight: user.weight,
            height: user.height,
            refferalCode: user.refferalCode,
            dateOfBirth: user.dateOfBirth,
            token: generateToken(user._id),
            coins: user.coins,
            calories: user.calories,
            timeToday: user.timeToady
        })
    } else{
        res.status(400);
        throw new Error('invalid email or password')
    }
})

module.exports = {
    registerUser,
    loginUser
}