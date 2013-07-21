'use strict'

var reds = require('reds')

module.exports = Indexer
function Indexer () {
  this.search = reds.createSearch('gist-index') 
}

Indexer.prototype.put = function (key, id)
{
  this.search.index(key, id)
}

Indexer.prototype.get = function (key, cb)
{
  this.search.query(key).end(cb)
}

