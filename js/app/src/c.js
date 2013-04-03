define(function(require, exports, module) {
    var $ = require('jquery');
    function modeC(text) {
        $('<p>&nbsp;&nbsp;--mode C load</p>').appendTo('#list');
    }

    module.exports = modeC;
});