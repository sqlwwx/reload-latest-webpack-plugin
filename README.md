# reload-latest-webpack-plugin

## Installation
```
npm install reload-latest-webpack-plugin
```
## Usage
```
var ReloadLatestHash = require('reload-latest-webpack-plugin');
var webpackConfig = {
  plugins: [new ReloadLatestHash()]
};
```
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
  </head>
  <body>
    <script>
      window.hash = '<%= webpack.hash %>'
      var script = document.createElement('SCRIPT')
      script.setAttribute('src', '/reload-latest-hash.js?version=' + (Date.now() + '').substr(0, 7))
      document.head.insertBefore(script,document.head.firstChild);
    </script>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
