define(function(require, exports, module) {
    var modA = require("./a");
    var modB = require("./b");

    modA();
    modB();

    require("jquery-migrate");
    $('#list').append("<br>$.migrateMute = " + $.migrateMute);
});