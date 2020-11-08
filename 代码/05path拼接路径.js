const fs = require('fs')
const path = require('path')
let res=path.join(__dirname,'./file/555.txt')
fs.readFile(res, function (err, data) {
    if (err) return console.log('shibai');
    console.log('读取成功');
    
})