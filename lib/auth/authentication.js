'use strict'

var API_ACCESS_TOKEN = require('../../config.json').Token

module.exports.config = {
  type: "oauth",
  token: API_ACCESS_TOKEN
}

