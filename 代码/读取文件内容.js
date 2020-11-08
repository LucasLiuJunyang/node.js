const fs = require('fs')
fs.readFile('./file/555.txt', 'utf8', function (err,success) {
    if (err) return console.log('读取失败');
    console.log(success);
   
 })