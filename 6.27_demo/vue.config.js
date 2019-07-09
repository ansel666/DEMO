const fs = require('fs').promises; // 文件操作
const path = require('path');
const banner = require('./mock/banner');
//const carlist = require('./mock/carlist')
// 路径
function readList(filename) {
  filename = path.resolve(__dirname, filename); // 取到文件的绝对路径
  return fs.readFile(filename, 'utf-8').then(data => JSON.parse(data));
}
module.exports = {
  devServer: {
    before(app) {
      // localhost:8080/banner
      app.get('/banner', (req, res) => {
        res.json({
          code: 200,
          banner,
        });
      });
      // 列表接口 localhost:3000/list
      app.get('/listapi', (req, res) => {
        readList('./mock/list.json').then((data) => {
          res.json({
            code: 200,
            list: data,
          });
        });
      });

      // --------
      app.get('/car', (req, res) => {
        readList('./mock/list.json').then((data) => {
          res.json({
            code: 200,
            list: data,
          });
        });
      });
      //购物车接口 localhost:3000/carlist
    //   app.get('/carlist',(res,res)=>{
    //       res.json([
    //           {
    //               name:'苹果',
    //               price:100,
    //           },
    //           {
    //               name:'香蕉',
    //               price:100,
    //           },
    //       ]);
    //   });
      
    },
  },
};