#!/usr/bin/env node

var Client = require('./lib/client')


if (process.argv.length == 2) {
 console.log('gist search @query')
 console.log('gist download @gist-id')
}

process.argv.forEach(function (item) {
  var command, query
  
  switch (item) {
   case 'search':
   var stmt = {
    'command': item,
     'options': process.argv.splice(3)
   }

   Client.query(stmt.options)
   break
   case 'download':
   var stmt = {
    'command': item,
    'options': process.argv.splice(3)
   }
   Client.download(stmt.options)
   break
   default:
   break
 }
})

