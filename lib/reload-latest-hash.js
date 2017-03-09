function ReloadLatest(options) {
}

ReloadLatest.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    var fileContent = `var latestHash = '${compilation.hash}';
window.buildAt = new Date(${Date.now()});
if (window.hash !== latestHash && window.location.href.indexOf('hash') === -1) {
  window.location.href += '?hash=' + latestHash;
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
