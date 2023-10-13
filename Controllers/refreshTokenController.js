const usersDB = {
    users: require("../Model/users.json"),
    setUsers: function (data) {this.users = data},
  };

  const jwt = require('jsonwebtoken')
  require('dotenv').config

  const handleRefreshToken = (req, res) => {
    const cookies = req.cookies

    if(!cookies?.jwt) return res.sendStatus(401)

    const refreshToken = cookies.jwt

    const foundUser = usersDB.users.find((person) => person.refreshToken === refreshToken);
  if (!foundUser) return res.sendStatus(401); //unauthorize
  }
  