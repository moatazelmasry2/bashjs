var _             = require('lodash');


;( function( exports ) {

    exports = _.merge(  require("./lib/utils"),
                        require("./lib/cd"),        
                        require("./lib/cat")
                     );
} ( module.exports ) );