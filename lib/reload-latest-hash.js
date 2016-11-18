function ReloadLatest(options) {
}

ReloadLatest.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    var fileContent = `let latestHash = '${compilation.hash}'
if (window.hash !== latestHash && window.location.href.indexOf('hash') === -1) {
  window.location.href += '?hash=' + latestHash
}`
    compilation.assets['reload-latest-hash.js'] = {
      source: function() {
        return fileContent
      },
      size: function() {
        return fileContent.length
      }
    }
    callback()
  })
}

module.exports = ReloadLatest
