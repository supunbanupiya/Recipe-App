const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const createError = require('../utils/appError');

exports.signup = async (req, res, next) => {
    try {
        const { firstname, lastname, email, phonenumber, password } = req.body

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new createError('User already exists', 400));
        }

        const hashedPassword = await bcrypt.hash(password, 12);
       
        const newUser = await User.create({
            firstname,
            lastname,
            email,
            phonenumber,
            password: hashedPassword
        });

        // JWT token
        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '90d',
        });
        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
            user: {
                _id: newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                phonenumber: newUser.phonenumber,
                role: newUser.role,
            }
        });
    } catch (error) {
        console.log(error)
        next(error);
    }
};


exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
     
        const user = await User.findOne({ email });
        if (!user) {
            return next(new createError('User not found', 404));
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return next(new createError('Invalid email or password', 401));
        }
        // JWT token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '90d',
        });
        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in successfully',
            user: {
                _id: user._id,
                firstName: user.firstname,
                lastName: user.lastname,
                email: user.email,
                phoneNumber: user.phonenumber,
                role: user.role,
            }
        });
    } catch (error) {
        next(error);
    }
};
