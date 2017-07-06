var  http = require("http")
var  mime = require("mime")
var  fs = require("fs")
var  path = require("path")
var router = require('./router')
var render = require('./render')

http.createServer(function(req,res){
  render(res)
  router(req,res)

    
})
.listen(3000,function(){
    console.log("server is runing...")
})

