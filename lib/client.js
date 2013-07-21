
'use strict'

  
var Indexer = require('./indexer/indexer'),
  GistHub = require('./gistHub'),
  Auth = require('./auth/authentication')


/**
 * Expose `Indexer`.
 */
exports.Indexer = Indexer

/**
 * Expose `GistHub`.
 */
exports.GistHub = GistHub

/**
 * `Authentication`.
 */
GistHub.GitHub.authenticate(Auth.config)

// -----------------------------
//  PUBLIC API
// -----------------------------

exports.query = function (key)
{
  return new Indexer().get(key, function (err, ids) {
    ids.forEach(function(id) {
      GistHub.fetchGistById(id)
    })
  })
}

exports.download = function (key)
{
  return GistHub.downloadGistById(key.join(','))
}

// -----------------------------
//  PRIVATE
// -----------------------------

/*
Client.prototype.indexGist = function (gists)
{

  var gist,
  description,
  id

  for (var i = 0; i < gists.length; i++) {
    gist = gists[i]
    description = gist.description, 
    id = gist.id

    if (description && id) {
      if (this.debug) console.log('Indexing: ' + description + 'with id: ' + id)
      this.Indexer.put(description, id)
    }
  }
}

Client.prototype.showGist = function (err, res)
{
  
  if (this.debug)
    console.log('Show Gists: ' + JSON.stringify(res))
  
  if (res) {
    this.indexGist(res)
   
    var nextPage = this.GistHub.hasNextPage(res.meta["link"])
    if(nextPage) {
      this.GistHub.getNextPage(res, this.showGist.bind(this))
    }
  }
}



Client.prototype.fetchFromUser = function (user)
{
   this.GistHub.gists.getFromUser({ user: user }, this.showGist.bind(this))
}

Client.prototype.fetchAllGists = function ()
{
  this.GistHub.gists.public({}, this.showGist.bind(this))
}


*/

//var client = new Client()
//client.fetchFromUser('calvernaz')
//client.showIndexed('Remote IR')
//client.fetchAllGists()
  //client.getFollowers()
