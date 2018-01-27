const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const redis = require('redis');
// const redisClient = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_HOST = process.env.REDIS_HOST;
const redisClient = redis.createClient(REDIS_HOST, REDIS_PORT);
const router = express.Router();

const saltRounds = 10;


// GET	/api/users/ Retrieve all users
router.get('/', (req, res) => {
  User.find()
      .then((users) => {
        // console.log(33, users);
        res.json(users);
      })
      .catch(console.error);
});

// GET /api/users/:id Retrieve User ID Information
router.get('/:id', (req, res) => {
  User
        .findById(req.params.id)
        .then((user) => {
          if (!user) res.status(404).send(null);
          res.status(200).json(user);
          console.log(user);
        })
        .catch(console.error);
});

// POST /api/users Create a new user
router.post('/', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
    const newUser = {
      username: req.body.username.toLowerCase(),
      email: req.body.email.toLowerCase(),
      password: hash
    };
    // console.log(66, hash);
    redisClient.hmset(hash, 'password', req.body.password);
    redisClient.expire(hash, 999999999999999);

    User.create(newUser, (err, user) => {
      if (err) {
        // console.log(111, err);
        res.send(err);
      } else {
        // console.log(23, user);
        res.status(201).json(user);
      }
    });
  });
});

// POST Log in
router.post('/login', (req, res) => {
  User.find({ email: req.body.email })
  .then((user) => {
    if (user.length === 0) {
      res.send({ message: 'Email Incorrect' });
    } else {
      redisClient.hgetall(user[0].password, (err, object) => {
        console.log(3, err);
        if (object.password === req.body.password) {
          res.json(user[0]);
        } else {
          res.send({ message: 'Password Incorrect' });
        }
      });
    }
  });
});

// PUT /api/users/:id Update a user
router.put('/:id', (req, res) => {
  User
        .findByIdAndUpdate(req.params.id,
        { $set: req.body },
        { new: true })
        .then((updatedUser) => {
          console.log(updatedUser);
        //   res.status(204).send(updatedUser);
        })
        .catch(console.error);
});

// DELETE /api/users/:id Delete a user
router
    .delete('/:id', (req, res) => {
      User.findByIdAndRemove(req.params.id)
            .then((user) => {
              res.send(req.params.id);
            })
            .catch(console.error);
    });

module.exports = router;
