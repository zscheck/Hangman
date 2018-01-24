const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const env = require('dotenv').config();
const randomWords = require('random-words');
// const RapidAPI = new require('rapidapi-connect');
// const rapid = new RapidAPI('default-application_5a66d8dbe4b0106aae8064b5', '26e1be5d-2eef-411f-ac7b-aba212144a98');

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

app.get('/synonyms/:word', (req, res) => {
  const word = req.params.word.toLowerCase();
  axios.get(`http://api.wordnik.com:80/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=${process.env.WORDNIK_API_KEY}`)
    .then((result) => {
    //   console.log(result.data[0]);
      res.send(result.data[0].words);
    })
    .catch((err) => {
    //   console.log(err);
      return err;
    });
});

module.exports = app;
