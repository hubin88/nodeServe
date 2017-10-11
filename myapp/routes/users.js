var express = require('express');
var router = express.Router();

//导入mysql模块
var mysql=require('mysql');
var dbConfig=require('../db/DBconfig');
var userSQL=require('../db/Usersql');
//使用DBConfig的配置信息创建一个mysql连接
var pool=mysql.createPool(dbConfig.mysql);
//响应一个JSON数据
var responseJSON=function (res,ret) {
  if(typeof ret === 'undefined'){
    res.json({
      code:'-200',
      msg:'操作失败'
    });
  }else{
    res.json(ret);
  }
};
//路由中间件
router.use(function timeLig(req,res,next) {
  console.log("Time:",Date.now());
  next();
});
router.get('/addUser',function (req,res,next) {
  pool.getConnection(function (err,connection) {
    var param=req.query||req.param;
    connection.query(userSQL.insert,[param.password,param.username],function (err,result) {
      if(result){
        result={
          code:200,
          msg:'添加成功'
        }
      }
      responseJSON(res,result);
      connection.release();
    })
  });
});
router.get("/list",function (req,res) {
  pool.getConnection(function (err, connection) {
    connection.query(userSQL.queryAll,function (err,result) {
      var lists=null;
      if(result){
        lists={
          code:200,
          list:result
        }
      }
      responseJSON(res,lists);
      // console.log(lists.list);
      // res.render('index',{"lists":lists.list});
      connection.release();
    })
  });
});
router.post('/register',function (req,res) {
  pool.getConnection(function (err, connection) {
    connection.query(userSQL.insert,[req.body.password,req.body.username],function (err,result) {
      var lists=null;
      if(result){
        lists={
          code:200,
          list:result
        }
      }
      responseJSON(res,lists);
      connection.release();
    })
  });
});
module.exports = router;
