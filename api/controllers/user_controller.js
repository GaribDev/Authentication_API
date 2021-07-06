var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  User = mongoose.model('User');

exports.register = function (req, res) {
  var new_user = new User(req.body);

  new_user.hash_pwd = bcrypt.hashSync(req.body.password, 8);
  new_user.save(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_pwd = undefined;
      return res.json(user);
    }
  });
};

exports.sign_in = function (req, res) {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) throw err;
    if (!user || !user.compare_pwd(req.body.password)) {
      return res.status(401).json({ message: 'Invalid user or password. Authentication failed.' });
    }
    return res.json({ token: jwt.sign({ username: user.username, email: user.email, fullName: user.fullName, _id: user._id }, 'Auth_API') });
  });
};

exports.login_required = function (req, res, next) {
  if (req.user) {
    next();
  } else {

    return res.status(401).json({ message: 'Unauthorized user!!' });
  }
};
exports.user_profile = function (req, res, next) {
  if (req.user) {
    res.send(req.user);
    next();
  }
  else {
    return res.status(401).json({ message: 'Token is invalid!!' });
  }
};