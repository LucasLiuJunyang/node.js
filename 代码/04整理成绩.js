const fs = require('fs')
fs.readFile('../素材/成绩.txt', 'utf8', function (err,success) {
    if (err) return console.log('读取失败');
    console.log('读取成功'+success);
    const oldArr = success.split(' ')
    const newArr = []
    oldArr.forEach(item => {
        newArr.push(item.replace('=', ':'))
    });
    const newStr = newArr.join('\r\n')
    
    fs.writeFile('./file/成绩ok.txt', newStr, function () {
        if (err) {
            return console.log('写入失败');
        }
        console.log('写入成功');
    })
 })