const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const env = require('dotenv').config();
const randomWords = require('random-words');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/newword', (req, res) => {
//   axios.get(`http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${process.env.WORDNIK_API_KEY}`)
//   .then((result) => {
//     // console.log(result.data);
//     res.send(result.data.word);
//   });
  res.send(randomWords());
});

module.exports = app;
