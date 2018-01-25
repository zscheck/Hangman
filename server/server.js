const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const env = require('dotenv').config();
const randomWords = require('random-words');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const redis = require('redis');
const redisClient = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});
// const REDIS_PORT = process.env.REDIS_PORT;
// const REDIS_HOST = process.env.REDIS_HOST;
// const redisClient = redis.createClient(REDIS_HOST, REDIS_PORT);

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(bodyParser.json());

mongoose.connect(`mongodb://zscheck:${process.env.MONGO_PASSWORD}@ds161630.mlab.com:61630/heroku_c4pv07b8`);
mongoose.Promise = Promise;

redisClient.on('connect', () => {
  console.log('connected');
});

app.get('/newword', (req, res) => {
//   axios.get(`http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${process.env.WORDNIK_API_KEY}`)
//   .then((result) => {
//     // console.log(result.data);
//     res.send(result.data.word);
//   });
  res.send(randomWords());
});

app.get('/synonyms/:word', (req, res) => {
  const word = req.params.word.toLowerCase();
  redisClient.exists(`${word}_word`, (err, reply) => {
    if (reply === 1) {
      console.log('true');
      redisClient.hgetall(`${word}_word`, (erro, object) => {
        //   console.log(object);
        let synonym = object.synonyms;
        synonym = synonym.split(',');
        // console.log(synonym);
        res.send(synonym);
      });
    } else {
        console.log('false');
      axios.get(`http://api.wordnik.com:80/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=${process.env.WORDNIK_API_KEY}`)
    .then((result) => {
    //   console.log(result.data[0]);
      const test = result.data[0].words.toString();
    // console.log(1, result.data[0].words.toString());
    // console.log(2, test.split(','));
      redisClient.hmset(`${word}_word`, 'synonyms', test);
      redisClient.expire(`${word}_word`, 999999999999999);
      res.send(result.data[0].words);
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
    }
  });
});

module.exports = app;
