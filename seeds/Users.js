const { Users } = require("../models")

const usersData = [
  {
    username: "jerrywoo",
    password: "jerrywoo",
  },
  {
    username: "microp",
    password: "microp",
  },
]
const seedUsers = () => Users.bulkCreate(usersData)

module.exports = seedUsers