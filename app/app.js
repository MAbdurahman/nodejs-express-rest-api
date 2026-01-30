/************************* imports *************************/
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import colors from 'colors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

/************************* setup config file *************************/
if (process.env.NODE_ENV !== 'production') {
   dotenv.config({path: './configs/config.env', quiet: true});
}

/***************************** variables *****************************/
const app = express();
colors.enabled = true;
const allowedDomains = [process.env.FRONTEND_URL];

/**************************** middlewares ****************************/
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}
app.use(helmet());
app.use(
   cors({
      origin: function (origin, callback) {
         // bypass the requests with no origin (like curl requests, mobile apps, etc )
         if (!origin) {
            return callback(null, true);
         }

         if (allowedDomains.indexOf(origin) === -1) {
            let message = `This site ${origin} does not have access. Only specific domains are allowed to access!`.red;
            return callback(new Error(message), false);
         }
         return callback(null, true);
      },
      methods: ['GET', 'POST', 'DELETE', 'PUT'],
      allowedHeaders: [
         'Content-Type',
         'Authorization',
         'Cache-Control',
         'Expires',
         'Pragma'
      ],
      credentials: true
   })
);
app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/*************************** import all routes ***************************/
import homeRoute from '../routes/homePageRoute.js';


/********************************* routes *********************************/
app.use('/', homeRoute);


export default app;