//learning auth 6/19
require("dotenv").config();

const express = require('express')
const app = express()
const jwt = require("jsonwebtoken");
app.use(express.json());

const PORT = 4000

let refreshTokens = []

app.post('/token', (req, res) => {
  const refreshToken = req.body.token;

  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
})

app.post("/login", (req, res) => {
  //Authenticate user
  const username = req.body.username;
  const user = { name: username };

  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET);
  
  res.json({ accessToken: accessToken, refreshToken:refreshToken });
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
}

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});