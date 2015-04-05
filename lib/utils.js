var _             = require('lodash');

var bashjs = exports;

_.merge(bashjs, require('./commons.js') );


bashjs.decodeParams = function(params) {
  if (_.isString(params)) return parsms;
  var _params = _.flattenDeep(params);
  
  var result = "";
  _.forEach(_params, function(n) {
    if (typeof n == 'object' ) {
      _.forEach(n, function(key) {
        result += key + bashjs.SEPARATOR + n[key] + " ";
      });
    } else {
      results += n + " "
    }
  } );
};

bashjs.exec = function(command) {
  if (!_.isString(command)) {
    throw new Error("Given object must be a string");
  }
  
  var sys = require('sys')
  var exec = require('child_process').exec;
  var child;

  child = exec(command, function (error, stdout, stderr) {
    if (error) {
      throw new Error(error)
    }
    
    sys.print('stdout: ' + stdout);
    sys.print('stderr: ' + stderr);
    
  });

}

            
            
