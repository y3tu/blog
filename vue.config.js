const path = require('path')

// 拼接路径
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 基础路径 注意发布之前要先修改这里
const baseUrl = ''

module.exports = {
    baseUrl: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: true,
    devServer: {
        publicPath: baseUrl // 和 baseUrl 保持一致
    },
}
