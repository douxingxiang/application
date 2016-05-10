/*jslint node:true*/
'use strict';

//var Iconv = require('iconv').Iconv;
//var jschardet = require('jschardet');

var logger = {};

logger.init = function(txt) {
    logger.con = txt;
};

logger.log = function(msg) {
    //msg = new Iconv(jschardet.detect(msg).encoding, 'UTF-8//TRANSLIT//IGNORE').convert(msg);
    logger.con.value += msg;
};

module.exports = logger;