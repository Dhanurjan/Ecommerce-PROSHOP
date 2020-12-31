import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'User1',
    email: 'user1@example.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'User2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'User3',
    email: 'user3@example.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users
