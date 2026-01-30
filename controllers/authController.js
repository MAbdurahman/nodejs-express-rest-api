/************************* imports *************************/
import User from '../models/userModel.js';
import asyncHandler from '../utils/asyncHandlerUtils.js';
import ErrorHandler from '../utils/errorHandlerUtils.js';
import generateToken from '../utils/generateTokenUtils.js';


export const signUpUser = asyncHandler(async (req, res, next) => {

   res.status(201).json({msg: 'User created successfully!'});


});

export const signInUser = asyncHandler(async (req, res, next) => {

   res.status(200).json({msg: 'User signed in successfully!'});


});

export const signOutUser = asyncHandler(async (req, res, next) => {

   res.status(200).json({msg: 'User signed out successfully!'});


});