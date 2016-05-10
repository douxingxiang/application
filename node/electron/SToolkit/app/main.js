/*jslint node:true*/
'use strict';

const logger = require('./app/logger.js');
console.log(logger);
var exec = require('child_process').exec

var textarea = document.querySelector('#console');
console.log(textarea);
logger.init(textarea);

var confBtn = document.querySelector('#gen-config');
var protBtn = document.querySelector('#gen-protocol');

protBtn.addEventListener('click', function() {
    var make_proto = exec("S:\\$outside\\协议配置表生成\\tools\\更新协议.bat")
    make_proto.stdout.on('data', function(data) {
        logger.log(data);
    });
});

confBtn.addEventListener('click', function() {
    var make_xml = exec("S:\\$outside\\配置表\\打表工具\\ExcelToXml\\ExcelToXml.exe");
    make_xml.on('exit', function() {
        var copy_xml = exec("S:\\$outside\\协议配置表生成\\tools\\updateJson\\更新本地测试配置表.bat");
        copy_xml.stdout.on('data', function(data) {
            logger.log(data);
        });
    });
    make_xml.stdout.on('data', function(data) {
        logger.log(data);
    });
});