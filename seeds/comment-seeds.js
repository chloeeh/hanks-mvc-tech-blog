const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Ok, um, but does this comment post tho?"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "How to make own? Please advise"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Bruh lmao"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "So, this challenge won't be complete bc it's during project 2 like...ok??"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "My contacts have fused to my eyeballs and I am now blound"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "I hate that my mouse struggles to highlight text."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "time to nap"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;