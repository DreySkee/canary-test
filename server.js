const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser')

const app = express();
app.use( bodyParser.json() ); 
const port = process.env.PORT || 5000;

const canaryApiUrl = 'https://fullstack-challenge-api.herokuapp.com';

// get all devices
app.get('/api/devices', (req, res) => {
  axios.get(`${canaryApiUrl}/devices`)
  .then( response => { res.send(response.data) })
  .catch( error => { res.send(error) });
});

// get device by id / get cvount
app.get('/api/devices/:id', (req, res) => {
  if(req.params.id === 'count'){
    axios.get(`${canaryApiUrl}/devices/count`)
    .then( response => { res.send({count: response.data}) })
    .catch( error => { res.send(error) });
  } else {
    axios.get(`${canaryApiUrl}/devices/${req.params.id}`)
    .then( response => { res.send(response.data) })
    .catch( error => { res.send(error) });    
  }
});

// delete device by id
app.delete('/api/devices/:id', (req, res) => {
  axios.delete(`${canaryApiUrl}/devices/${req.params.id}`)
  .then( response => { res.send(response.data) })
  .catch( error => { res.send(error) });
});

// get device readings by id 
app.get('/api/devices/:id/readings', (req, res) => {
  axios.get(`${canaryApiUrl}/devices/${req.params.id}/readings`)
  .then( response => { res.send(response.data) })
  .catch( error => { res.send(error) });
});

// add new device
app.post('/api/devices', (req, res) => {
  axios.post(`${canaryApiUrl}/devices`, {name: req.body.name})
  .then( response => { res.send(response.data) })
  .catch( error => { res.send(error) });
});


app.listen(port, () => console.log(`Listening on port ${port}`));