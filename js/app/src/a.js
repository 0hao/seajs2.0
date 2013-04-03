define(function(require, exports, module) {
    var $ = require('jquery');
    function modeA(text) {
        $('<p>mode A load</p>').appendTo('#list');
    }

    module.exports = modeA;
});