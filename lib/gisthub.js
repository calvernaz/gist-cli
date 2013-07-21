'use strict'

var GitHub = require('github'),
 spawn = require('child_process').spawn

exports.GitHub = new GitHub({
    version: "3.0.0",
    timeout: 5000,
    debug: false
})


exports.fetchGistById = function (id)
{
  this.GitHub.gists.get({ id: id }, function (err, res) {
    if (err) throw err
      console.log('Gist #%s, %s, %s' , res.id, res.description, res.html_url)
  })
}

exports.downloadGistById = function (id)
{
  this.GitHub.gists.get({ id: id }, function (err, res) {
    if (err) throw err
    downloadLink(res)
  })
}

function downloadLink(gist) {
  var curl = spawn('curl', ['-OJ', 'https://gist.github.com/'+ gist.user.login+'/' + gist.id + '/download'])
  curl.on('exit', function () {
    process.exit()
  })
  curl.stderr.pipe(process.stdout)

}