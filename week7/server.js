//learning auth 6/19
require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')

const app = express()
const PORT = 3000;


app.use(express.json())

const posts = [
  {
    username: 'Mark',
    title: 'Post 1'
  },
  {
    username: 'Gavin',
    title: 'Post 2'
  }
]

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});