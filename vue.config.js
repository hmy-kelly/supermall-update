// module.exports = {
//     publicPath: './',
//     configureWebpack: {
//         resolve: {
//             extensions: ['.js', '.vue','.json','.css'],
//             alias: {
//                 'assets': '@/assets',
//                 'components': '@/components',
//                 'network': '@/network',
//                 'views': '@/views',
//             }
//         }
//     }
// }


// const path = require('path');        //引入path模块
// function resolve(dir){
//     return path.join(__dirname,dir)  //path.join(__dirname)设置绝对路径
// }
// module.exports={
//     chainWebpack:(config)=>{
//         config.resolve.alias
//             //set第一个参数：设置的别名，第二个参数：设置的路径
//             .set('@',resolve('src'))
//             .set('assets',resolve('@/assets'))
//             .set('components',resolve('@/components'))
//             .set('views',resolve('@/views'))
//     }
// }
