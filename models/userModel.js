/****************************** imports ******************************/
import {model, Schema} from 'mongoose';

/************************** regex patterns **************************/
const fullname_pattern = /^([a-zA-Z-]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|II|III|IV))?$/g;
const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;

const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,32}$/i

/****************************** schema ******************************/
const userSchema = new Schema({
      fullname: {
         type: String,
         trim: true,
         required: true
      },
      email: {
         type: String,
         trim: true,
         required: [true, 'Email is required!'],
         unique: [true, 'Email already exists!']

      },
      password: {
         type: String,
         trim: true,
         required: [true, 'Password is required!']
      },
      role: {
         type: String,
         enum: ['user', 'admin'],
         default: 'user'
      }
   },
   {timestamps: true}
);

const User = new model('User', userSchema);
export default User;