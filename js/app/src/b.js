define(function(require, exports, module) {
    var $ = require('jquery');
    var modC = require("./c");
    
    function modeB(text) {
        $('<p>mode B load</p>').appendTo('#list');
        modC();
    }

    module.exports = modeB;
    
});