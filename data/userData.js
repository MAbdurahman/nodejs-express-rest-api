/************************* imports *************************/
import bcrypt from 'bcrypt';

const usersData = [

   {
      fullname: 'Mahdi Abdurrahman',
      email: 'mahdi@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'admin'
   },
   // Female Users
   {
      fullname: 'Emma Thompson',
      email: 'emma@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Olivia Miller',
      email: 'olivia@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Sophia Davis',
      email: 'sophia@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Ava Wilson',
      email: 'ava@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Isabella Brown',
      email: 'isabella@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Mia Johnson',
      email: 'mia@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Charlotte Williams',
      email: 'charlotte@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Amelia Garcia',
      email: 'amelia@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },

   // Male Users
   {
      fullname: 'James Anderson',
      email: 'james@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'William Clark',
      email: 'william@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Benjamin Taylor',
      email: 'benjamin@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'

   },
   {
      fullname: 'Lucas Moore',
      email: 'lucas@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Henry Jackson',
      email: 'henry@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Alexander Martin',
      email: 'alexander@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      fullname: 'Daniel Rodriguez',
      email: 'daniel@example.com',
      password:  bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   }

];
export default usersData;