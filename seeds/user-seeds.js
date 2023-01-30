const { User } = require('../models');

const userData = [
    {
        username: "chloeeh",
        twitter: "chloeeh",
        github: "chloeeh",
        email: "chloeeh@example.com",
        password: "p@ssword1"
    },
    {
        username: "padrig",
        twitter: "padrig",
        github: "padrig",
        email: "padrig@example.com",
        password: "p@ssword2"
    },
    {
        username: "justin",
        twitter: "justin",
        github: "justin",
        email: "justin@example.com",
        password: "p@ssword3"
    },
    {
        username: "gary",
        twitter: "gary",
        github: "gary",
        email: "gary@example.com",
        password: "p@ssword4"
    },
    {
        username: "mac",
        twitter: "mac",
        github: "mac",
        email: "mac@example.com",
        password: "p@ssword5"
    },
    {
        username: "thomas",
        twitter: "thomas",
        github: "thomas",
        email: "thomas@example.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;