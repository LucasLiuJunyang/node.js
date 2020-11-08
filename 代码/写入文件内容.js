const fs = require('fs')
fs.writeFile('./file/111.txt', 'ccc', function (err) {
    if (err) return console.log('写入失败');
    console.log('写入成功');
})