const { Blogs } = require("../models")

const blogsData = [
  {
    title: "hey",
    content: "heyho",
    user_id: 1,
  },
  {
    title: "yea",
    content: "yeayeah",
    user_id: 2,
  },
]
const seedBlogs = () => Blogs.bulkCreate(blogsData);

module.exports = seedBlogs; 