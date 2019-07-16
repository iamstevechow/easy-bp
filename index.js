var fs = require('fs-extra');

fs.copy('src/client', '../../client', () => {
  console.log('success client');
});

fs.copy('src/scripts', '../../scripts', () => {
  console.log('success scripts');
});

fs.copy('src/server', '../../server', () => {
  console.log('success server');
});

fs.copy('src/.babelrc', '../../.babelrc', () => {
  console.log('success .babelrc');
});

fs.copy('src/.gitignore', '../../.gitignore', () => {
  console.log('success .gitignore');
});

fs.copy('src/index.js', '../../index.js', () => {
  console.log('success index.js');
});

fs.copy('src/webpack.config.js', '../../webpack.config.js', () => {
  console.log('success webpack.config.js');
});

// "start": "nodemon index.js",
// "start-dev": "NODE_ENV='development' webpack -w & nodemon"
