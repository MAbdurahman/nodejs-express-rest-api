import bcrypt from 'bcrypt';

const salt = await bcrypt.genSalt(10);

const usersData = [

   {
      name: 'Mahdi Abdurrahman',
      email: 'mdbdrrhm5@gmail.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'admin'
   },
   // Female Users
   {
      name: 'Emma Thompson',
      email: 'emma@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Olivia Miller',
      email: 'olivia@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Sophia Davis',
      email: 'sophia@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Ava Wilson',
      email: 'ava@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Isabella Brown',
      email: 'isabella@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Mia Johnson',
      email: 'mia@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Charlotte Williams',
      email: 'charlotte@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Amelia Garcia',
      email: 'amelia@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },

   // Male Users
   {
      name: 'James Anderson',
      email: 'james@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'William Clark',
      email: 'william@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Benjamin Taylor',
      email: 'benjamin@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'

   },
   {
      name: 'Lucas Moore',
      email: 'lucas@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Henry Jackson',
      email: 'henry@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Alexander Martin',
      email: 'alexander@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   },
   {
      name: 'Daniel Rodriguez',
      email: 'daniel@example.com',
      password: await bcrypt.hash('Aa!2qwer', salt),
      role: 'user'
   }

];
export default usersData;