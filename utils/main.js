const fs = require('fs'); // 文件模块
const files = fs.readdirSync("./")
let filesName = []
files.forEach((file) => {
  const fileArr = file.split('.')
  const suffix = fileArr[fileArr.length - 1]
  if (suffix === "mp4") filesName.unshift(fileArr[0])
})

fs.writeFile('utils/filesName/filesName.json', JSON.stringify(filesName), function (err) {
  if (err) {
    console.log("写入失败" + err);
  } else {
    console.log("写入成功");
  }
})