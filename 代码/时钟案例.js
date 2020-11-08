const fs = require('fs')
const path = require('path')

//定义正则
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
//读取方法
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function (err,dataStr) {
    if (err) return console.log('读取文件失败');
    console.log('成功');
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
//定义处理css样式方法
function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
        if (err) return console.log('写入样式失败');
        console.log('写入样式成功');
    })
}
//定义处理js脚本方法
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
      if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
      console.log('写入 JS 脚本成功！')
    })
  }
//定义处理html页面方法
function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, err => {
        if (err) return console.log('写入HTML页面失败');
        console.log('写入HTML页面成功');
    })
}