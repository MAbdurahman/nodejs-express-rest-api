import jwt from 'jsonwebtoken';

export const generateToken = (res, user) => {
   return jwt.sign({
      id: user.id,
      role: user.role,
      email: user.email,
      fullname: user.fullname
   }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_TIME
   });
};

export default generateToken;