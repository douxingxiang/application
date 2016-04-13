/* jshint node:true */
"use strict";

var mysql = require('mysql');

function MysqlClient(opts) {
    this.pool = mysql.createPool(opts);
}