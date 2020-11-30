const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");
const bodyParser = require('body-parser')

async function register(req, res) {
  console.log(req.body);
  let { username, email, password } = req.body.values;

  try {
    const user = await UserModel.create({
      email,
      username,
      password
    });

    const token = JWTService.generateToken(user);
    const userType = user.userType;
    const userId = user._id;
    return res.json({ userInfo: userId, token });
  } catch (err) {
    return res.send(err);
  }
}

function login(req, res, next) {
  const { user } = req;
  const token = JWTService.generateToken(user);
  const userId = user._id;
  return res.json({
    userInfo: userId,
    token
  });
}

async function update(req, res) {
  const {
    email,
    username,
    password,
  } = req.body;


  const { user } = req;
  user.email = email;
  user.username = firstName;
  user.password = password;

  try {
    user.save();
    return res.json(user);
  } catch (err) {
    return res.send(err);
  }
}

module.exports = {
  register,
  login,
  update
};