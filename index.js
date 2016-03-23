'use strict';

var execa = require('execa');

module.exports = function installedLocalModules() {
  return execa.shell('npm ls --parseable')
    .then(res => res.stdout.split('\n')
      .filter((line, i) => i !== 0)
      .map(line => {
        var splited = line.split('/node_modules/');
        return splited[splited.length - 1];
      })
    );
};
