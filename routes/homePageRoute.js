/************************* imports *************************/
/*const express = require('express');
const HomePage = require('../pages/homePage.js');*/

import HomePage from '../pages/homepage.js';
import express from 'express';

/************************* variables *************************/
const router = express.Router();

/*************************** route ***************************/
router.get('/', (req, res) => {
   res.send(HomePage());
});

export default router;