const axios = require('axios');

exports.api = axios.create({
  baseURL: process.env.NODE_APP_MAPLE_BASE_URL,
  headers:{
    'Content-Type': 'application/json',
    "x-nxopen-api-key": process.env.NODE_APP_MAPLE_API_KEY,
    "accept": "application/json"
  }
})
