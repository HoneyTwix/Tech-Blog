const { Comment } = require("../models")

const commentData = [
  {
    comment_text: "lala",
    user_id: 1,
    blog_id: 1,
  },
  {
    comment_text: "lulu",
    user_id: 2,
    blog_id: 2,
  },
]

const seedComment = () => Comment.bulkCreate(commentData)
module.exports = seedComment