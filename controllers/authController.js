/************************* imports *************************/
import User from '../models/userModel.js';
import asyncHandler from '../utils/asyncHandlerUtils.js';
import messageHandler from '../utils/messageHandlerUtils.js';
import generateToken from '../utils/generateTokenUtils.js';
import bcrypt from 'bcrypt';
import {
   validateFullname,
   validateEmail,
   validatePassword
} from '../utils/functionsUtils.js';

export const signUpUser = asyncHandler(async (req, res, next) => {
   const {fullname, email, password} = req.body;

   if (!fullname) {
      return next(messageHandler(res, false, 'Fullname is required', 400));
   }
   if (validateFullname(fullname).isValid === false) {
      const {error} = validateFullname(fullname);
      return next(messageHandler(res, false, error, 406));
   }

   if (!email) {
      return next(messageHandler(res, false, 'Email is required', 400));
   }
   if (validateEmail(email).isValid === false) {
      const {error} = validateEmail(email);
      return next(messageHandler(res, false, error, 406));
   }

   if (!password) {
      return next(messageHandler(res, false, 'Password is required', 400));
   }
   if (validatePassword(password).isValid === false) {
      const {error} = validatePassword(password);
      return next(messageHandler(res, false, error, 406));
   }

   /************************* find out if a user already exists *************************/

   const userAlreadyExists = await User.findOne({email});

   if (userAlreadyExists) {
      return next(messageHandler(res, false, 'User already exists!', 409));

   }
   /************************* hashing password *************************/
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);

   /************************* create and save a user *************************/
   const newUser = await new User({
      fullname,
      email,
      password: hashedPassword
   });

   const user = await newUser.save();

   /************************* generate token *************************/
   const e_Book = await generateToken(res, user);

   /************************* successful response *************************/
   res.status(201).json({
      success: true,
      message: 'User created successfully!',
      user: {
         ...user._doc,
         password: null
      },
      e_Book
   });

});

export const signInUser = asyncHandler(async (req, res, next) => {

   const {email, password} = req.body;

   res.status(200).json({msg: 'User signed in successfully!'});


});

export const signOutUser = asyncHandler(async (req, res, next) => {

   res.status(200).json({msg: 'User signed out successfully!'});


});