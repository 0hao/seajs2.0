define("./js/app/build/main-debug", [ "./a-debug", "jquery-debug", "./b-debug", "./c-debug", "jquery-migrate-debug" ], function(require, exports, module) {
    var modA = require("./a-debug");
    var modB = require("./b-debug");
    modA();
    modB();
    require("jquery-migrate-debug");
    $("#list").append("<br>$.migrateMute = " + $.migrateMute);
});

define("./js/app/build/a-debug", [ "jquery-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    function modeA(text) {
        $("<p>mode A load</p>").appendTo("#list");
    }
    module.exports = modeA;
});

define("./js/app/build/b-debug", [ "jquery-debug", "./c-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    var modC = require("./c-debug");
    function modeB(text) {
        $("<p>mode B load</p>").appendTo("#list");
        modC();
    }
    module.exports = modeB;
});

define("./js/app/build/c-debug", [ "jquery-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    function modeC(text) {
        $("<p>&nbsp;&nbsp;--mode C load</p>").appendTo("#list");
    }
    module.exports = modeC;
});
