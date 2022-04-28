const express = require("express")
const cors = require("cors")
const { default: axios } = require("axios")
const app = express()

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
  res.header("Accept", 'application/json, text/plain, */*'),
  next()
})

app.get('/', (req, res) => {
  let url = 'http://141.95.153.155/';
  axios.get(url)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/inscription', (req, res) => {
  let url = 'http://141.95.153.155/inscription';
  axios.get(url)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/reset', (req, res) => {
  let url = 'http://141.95.153.155/reset';
  axios.get(url)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/escalier', (req, res) => {
  let url = 'http://141.95.153.155/escalier';
  axios.get(url)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/coffre', (req, res) => {
  let url = 'http://141.95.153.155/coffre';
  axios.get(url)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/1', (req, res) => {
  let url = 'http://141.95.153.155/1';
  axios.get(url)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})