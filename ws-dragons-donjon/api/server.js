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
      res.send(error);
    })
})

app.get('/:route', (req, res) => {
  let url = `http://141.95.153.155/${req.params.route}`;
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