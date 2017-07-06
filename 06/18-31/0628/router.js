var handler = require('./handler')


var  mime = require("mime")
var  fs = require("fs")
var  path = require("path")

module.exports = function(req,res){
 var  url = req.url;
    if(url === "/"){
      handler.showIndex(req,res)
    }else if(url.indexOf("/node_modules/") === 0 || url.indexOf("/img/") === 0){
       handler.handlePublic(req,res)
    }else if(url === "/add"){
          handler.showAdd(req,res)
    }




    }