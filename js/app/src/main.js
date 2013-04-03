define(function(require, exports, module) {
    var modelA = require("./a");
    var modelB = require("./b");

    modelA();
    modelB();

    require("jquery-migrate");
    $('#list').append("<br>$.migrateMute = " + $.migrateMute);
});