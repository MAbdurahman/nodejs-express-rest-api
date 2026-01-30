/************************* imports*************************/
import express from 'express';
import { signUpUser, signInUser, signOutUser } from '../controllers/authController.js';


const router = express.Router();


router.post('/sign-up', signUpUser);
router.post('/sign-in', signInUser);
router.post('/sign-out', signOutUser);


export default router;